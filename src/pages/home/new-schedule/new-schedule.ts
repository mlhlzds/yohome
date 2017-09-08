import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FileObj } from "../../../model/FileObj";
import { OrderSchedule } from "../../../model/OrderSchedule";

import { Http, RequestOptions, Headers } from '@angular/http';


/**
 * Generated class for the NewSchedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-schedule',
  templateUrl: 'new-schedule.html',
  styleUrls: ['/new-schedule.scss']
})
export class NewSchedulePage {
  describe: string = '';
  fileObjList: FileObj[] = []; //所有图片
  orderId: string;
  orderScheduleList: OrderSchedule[] = [];
  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.orderScheduleList = navParams.get("list");  //订单对象
    this.orderId = navParams.get("id");  //订单对象
  }

  thumb: Array<string> = new Array<string>(); //用于存放图片的base64 

  img_upload(event: any) { //单次提交图片的函数 

    var reader = new FileReader(); //创建一个FileReader接口 
    var guid = (new Date()).valueOf(); //通过时间戳创建一个随机数，作为键名使用 
    var file = event.target.files[0];

    reader.readAsDataURL(file); //FileReader的方法，把图片转成base64 
    var self = this;


    reader.onload = function (e) {
      self.thumb.push(this.result);

      console.log(guid);
    }

  };

  img_del(key) {
    this.thumb.splice(key, 1);
  };
  cliTest() {
    console.log(this.thumb.length);
  }

  newSchedule() {
    let orderSchedule: OrderSchedule = new OrderSchedule();
    orderSchedule.imgs = this.fileObjList;
    orderSchedule.describe = this.describe;
    orderSchedule.id = this.orderId;

    console.log("this.orderIdthis.orderId==="+this.orderId);
   
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify(orderSchedule);
    this.http.post("content/newSchedule", body, options).map(res => {
      console.log(res.json());
    }).subscribe(function (data) {
    })

    this.orderScheduleList.unshift(orderSchedule);
    this.navCtrl.pop();
    console.log(this.fileObjList);

  }
}
