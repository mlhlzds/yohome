import { Component, ElementRef, ContentChildren, OnChanges, SimpleChanges } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserOrder } from "../../../model/UserOrder";
import { NewSchedulePage } from '../new-schedule/new-schedule';
import { ScheduleComplaintPage } from '../schedule-complaint/schedule-complaint';

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
  userOrder: UserOrder; //传过来的订单对象
  @ContentChildren(OrderSchedule) orderScheduleList: OrderSchedule[] = [];

  constructor(private el: ElementRef, private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.userOrder = navParams.data;  //订单对象
    this.getAllOrder();
  }

  cnt: number = 4;
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

  //投诉
  toScheduleComplaint() {
    this.navCtrl.push(ScheduleComplaintPage, this.orderScheduleList);
  }
  //发表新的进度
  newSchedule() {
    this.navCtrl.push(NewSchedulePage, this.orderScheduleList);
  }
  teststr: any;
  testReply: any;
  myplaceholder: any = '请输入回复内容…';
  testChange2(i, replyName) {
    this.testReply = replyName;
    console.log(this.el.nativeElement.querySelector('#input' + i));
    this.myplaceholder = '回复' + replyName;
    this.el.nativeElement.querySelector('#input' + i).querySelector('input').focus();

  }
  testChange(i) {
    // var val = this.el.nativeElement.querySelector('#input'+i).value;
    if (!this.orderScheduleList[i].reply) {
      this.orderScheduleList[i].reply = [];
    }
    this.orderScheduleList[i].reply.push({
      "id": "123",
      "name": "chenyun",
      "content": this.teststr,
      "replyName": this.testReply,
      "replyId": "",
      "time": "两分钟之前"
    });
    this.teststr = "";
    this.testReply = "";
    this.myplaceholder = '请输入回复内容…';
    //alert(this.teststr);
  }
  testTo() {
    this.el.nativeElement.querySelector('input').focus();
    // this.el.nativeElement.querySelector('#content').a;
  }
  test() {
    console.log("1111111111");
    this.http.get("assets/data/OrderSchedule.json").map(res => {
      for (var i = 0; i < res.json().length; i++) {
        this.orderScheduleList.push(res.json()[i]);
      }
      location.href = "#ion4";
    }).subscribe(function (data) {
      console.log(data)
    })

    this.cnt = this.cnt + 1;
  }

  //這個方法導致 頁面進入會變卡
  // ionViewWillEnter() {
  //   console.log("viewWillAppear");
  //   location.href = '#ion0';
  // }

  // 方法二 发表新的进度 总是显示最上面的  也会卡顿
  // osCont: number = this.orderScheduleList.length;
  // ngAfterViewChecked() {
  //   if (this.osCont < this.orderScheduleList.length) {
  //     this.osCont = this.orderScheduleList.length;
  //     location.href = '#ion0';
  //   }
  // }

}
