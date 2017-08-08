import { Component,ElementRef,ContentChildren  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserOrder } from "../../../model/UserOrder";
import { NewSchedulePage } from '../new-schedule/new-schedule';

import { FileObj } from "../../../model/FileObj";
import { OrderSchedule } from "../../../model/OrderSchedule";


import { Http, RequestOptions, Headers } from '@angular/http';
/**
 * Generated class for the UserListOrdersInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-list-orders-info',

  templateUrl: 'user-list-orders-info.html',
  styleUrls: ['/user-list-orders-info.scss']
})
export class UserListOrdersInfoPage {
  fileObjList: FileObj[] = []; //所有图片
  fo: FileObj = new FileObj();
  userOrder: UserOrder = new UserOrder; //传过来的订单对象
  @ContentChildren(OrderSchedule)orderScheduleList:OrderSchedule[] = [];


  


  constructor(private el: ElementRef,private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.userOrder = navParams.data;  //订单对象
   

    // this.fo.base64 = 'assets/img/avatar-ts-buzz.jpg';
    // this.fo.thumbPath = 'assets/img/avatar-ts-buzz.jpg';
    // this.fo.origPath = 'assets/img/avatar-ts-buzz.jpg';

    // this.fileObjList.push(this.fo);
    this.getAllOrder();
  }

  cnt:number = 4;

  //获得所有订单
  getAllOrder() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify({
      code: "mk200"
    });

    // this.http.post("assets/data/testServlet.json", body, options).subscribe(function (data) {
    //   console.log(data)
    // })
    
    this.http.get("assets/data/OrderSchedule.json").map(res => {
      this.orderScheduleList = res.json();

    }).subscribe(function (data) {
      console.log(data)
    })

  }

  //加载数据
  doInfinite(): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
       
        this.http.get("assets/data/OrderSchedule.json").map(res => {
          for (var i = 0; i < res.json().length; i++) {
           this.orderScheduleList.push(res.json()[i]);
          }

        }).subscribe(function (data) {
          console.log(data)
        })

        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }

  //发表新的进度
  newSchedule() {
    this.navCtrl.push(NewSchedulePage, this.orderScheduleList);
  }

  testTo(){
    location.href = "test";
   // this.el.nativeElement.querySelector('#content').a;
  }
  test(){
    console.log("1111111111");
    this.http.get("assets/data/OrderSchedule.json").map(res => {
          for (var i = 0; i < res.json().length; i++) {
           this.orderScheduleList.push(res.json()[i]);
          }
           location.href = "#ion4";
        }).subscribe(function (data) {
          console.log(data)
        })
       
    this.cnt = this.cnt+1;
  }



  ngAfterContentInit() {
    console.log("2222222222222222222222222");
  }



    barcodeScanner() {
    console.log("gggggggggggggggg");
  }

  ngAfterViewChecked(){
    console.log("1111111111111111111111111111");
  }
}
