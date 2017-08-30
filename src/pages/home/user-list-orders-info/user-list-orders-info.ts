import { Component, ElementRef, ContentChildren } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserOrder } from "../../../model/UserOrder";
import { NewSchedulePage } from '../new-schedule/new-schedule';
import { ScheduleComplaintPage } from '../schedule-complaint/schedule-complaint';
import { FileObj } from "../../../model/FileObj";
import { OrderSchedule } from "../../../model/OrderSchedule";
import { MineEditPage } from '../../contact/mine-edit/mine-edit';
import { Http, RequestOptions, Headers } from '@angular/http';
import { UserInfo } from "../../../model/UserInfo";

@Component({
  selector: 'page-user-list-orders-info',
  templateUrl: 'user-list-orders-info.html',
  styleUrls: ['/user-list-orders-info.scss']
})

export class UserListOrdersInfoPage {
  fileObjList: FileObj[] = []; //所有图片
  userOrder: UserOrder; //传过来的订单对象
  orderScheduleList: OrderSchedule[] = [];

  constructor(private el: ElementRef, private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.userOrder = navParams.data;  //订单对象
    this.getAllOrder();
  }

  //跳转到员工信息
  toMineEditPage() {
    var userInfo = <UserInfo>{
      id: '1',
      username: 'nihao',
      name: '小军',
      email: 'yanxiaojun617@163.com',
      phone: '18688498342',
      phoneBak: '18688498343',
      avatar: '',
      avatarPath: 'assets/img/avatar-ts-jessie.png',
      description: '有图有真相，一本正经的胡说八道..',
      token: '',
      address: '上海市浦东新区杨高南路陆家嘴金融中心'
    }

    this.navCtrl.push(MineEditPage, { "userInfo": userInfo, "avatarPath": "assets/img/marty-avatar.png" });
  }

  //获得所有订单
  getAllOrder() {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    // let body = JSON.stringify({
    //   test:'test'
    // });

    // this.http.post("testServlet.json", body, options).map(res => {
    //   res.json();
    // }).subscribe(function (data) {
    //   console.log('1111');
    // })

    this.http.get("assets/data/OrderSchedule.json").map(res => {
      this.orderScheduleList = res.json();
    }).subscribe(function (data) {
      console.log(data)
    })

  }

  //往下拉 加载数据
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
    location.href = '#ion0';
    this.navCtrl.push(NewSchedulePage, this.orderScheduleList);
  }

  content: any;
  replyName: any;
  myplaceholder: any = '请输入回复内容…';
  replyToName(i, replyName) {
    this.replyName = replyName;
    console.log(this.el.nativeElement.querySelector('#input' + i));
    this.myplaceholder = '回复' + replyName;
    this.el.nativeElement.querySelector('#input' + i).querySelector('input').focus();
  }
  reply(i) {
    // var val = this.el.nativeElement.querySelector('#input'+i).value;
    if (!this.orderScheduleList[i].reply) {
      this.orderScheduleList[i].reply = [];
    }
    this.orderScheduleList[i].reply.push({
      "id": "123",
      "name": "chenyun",
      "content": this.content,
      "replyName": this.replyName,
      "replyId": "",
      "time": "两分钟之前"
    });
    this.content = "";
    this.replyName = "";
    this.myplaceholder = '请输入回复内容…';
  }

  testTo() {
    this.el.nativeElement.querySelector('input').focus();
  }
  test() {
    this.http.get("assets/data/OrderSchedule.json").map(res => {
      for (var i = 0; i < res.json().length; i++) {
        this.orderScheduleList.push(res.json()[i]);
      }
      location.href = "#ion4";
    }).subscribe(function (data) {
      console.log(data)
    })

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
