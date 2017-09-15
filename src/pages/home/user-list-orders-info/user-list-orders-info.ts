import { Component, ElementRef, ContentChildren } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserOrder } from "../../../model/UserOrder";
import { NewSchedulePage } from '../new-schedule/new-schedule';
import { ScheduleComplaintPage } from '../schedule-complaint/schedule-complaint';
import { FileObj } from "../../../model/FileObj";
import { OrderSchedule } from "../../../model/OrderSchedule";
import { MineEditPage } from '../../contact/mine-edit/mine-edit';
import { Http, RequestOptions, Headers } from '@angular/http';
import { UserInfo, LoginInfo } from "../../../model/UserInfo";
import { Storage } from '@ionic/Storage';
import { LoadingController, ToastController } from 'ionic-angular';
@Component({
  selector: 'page-user-list-orders-info',
  templateUrl: 'user-list-orders-info.html',
  styleUrls: ['/user-list-orders-info.scss']
})

export class UserListOrdersInfoPage {
  fileObjList: FileObj[] = []; //所有图片
  userOrder: UserOrder; //传过来的订单对象
  orderScheduleList: OrderSchedule[] = [];
  userInfo: any = null;

  f:number = 1;  //进度

  constructor(public toastCtrl: ToastController, public loadingCtrl: LoadingController, private storage: Storage, private el: ElementRef, private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.userOrder = navParams.data.userOrder;  //订单对象
    this.userInfo = navParams.data.userInfo;  //订单对象
    console.log("*********************订单对象*********************");
    console.log(this.userOrder);
    console.log("*********************订单对象*********************");
    if(this.userInfo!=null){
      this.getAllOrder();
    }else{
      this.f = 0;
      this.userInfo = UserInfo;
      this.userInfo.userType="user2";
      this.getAllOrder2();
    }
    

    
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
      address: '上海市浦东新区杨高南路陆家嘴金融中心',
      userType: ''
    }

    this.navCtrl.push(MineEditPage, { "userInfo": userInfo, "avatarPath": "assets/img/marty-avatar.png" });
  }
  pageNum: number = 1;
  pageSize: number = 2;
  //获得所有订单
  getAllOrder() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify({
      orderId: this.userOrder.id,  //订单id
      pageSize: this.pageSize + "", //页大小
      pageNum: this.pageNum + "" //当前页
    });

    this.http.post("contract/contentList", body, options).map(res => {
      console.log("*********************打印进度***********************************");
      console.log(res.json());
      console.log("*********************打印进度***********************************");
      var objList = eval('(' + res.json() + ')');
      this.orderScheduleList = objList;
    }).subscribe(function (data) {
      console.log('1111');
    })

  


    // this.http.get("assets/data/OrderSchedule.json").map(res => {
    //   this.orderScheduleList = res.json();
    // }).subscribe(function (data) {
    //   console.log(data)
    // })

  }

    //获得所有订单
  getAllOrder2() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify({
      pageSize: this.pageSize + "", //页大小
      pageNum: this.pageNum + "" //当前页
    });

    this.http.post("content/allContent", body, options).map(res => {
      console.log("*********************打印进度***********************************");
      console.log(res.json());
      console.log("*********************打印进度***********************************");
      var objList = eval('(' + res.json() + ')');
      this.orderScheduleList = objList;
    }).subscribe(function (data) {
      console.log('1111');
    })
  }

  //往下拉 加载数据
  doInfinite(): Promise<any> {
    console.log('Begin async operation');
    return new Promise((resolve) => {
      setTimeout(() => {
        this.pageNum = this.pageNum + 1;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

       let body;
        var url = 'contract/contentList';
        if(this.f == 0){
          url = 'content/allContent';
          body = JSON.stringify({
          pageSize: this.pageSize + "", //页大小
          pageNum: this.pageNum + "" //当前页
        });
        }else{
          body = JSON.stringify({
          orderId: this.userOrder.id,  //订单id
          pageSize: this.pageSize + "", //页大小
          pageNum: this.pageNum + "" //当前页
        });
        }
        this.http.post(url, body, options).map(res => {
          var objList = eval('(' + res.json() + ')');
          for (var i = 0; i < objList.length; i++) {
            this.orderScheduleList.push(objList[i]);
          }
        }).subscribe(function (data) {
          console.log('1111');
        })

        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }

  //投诉
  toScheduleComplaint(id) {
    console.log("toScheduleComplaint(id) {==" + id);
    this.navCtrl.push(ScheduleComplaintPage, { "id": id, "userType": this.userInfo.userType });
  }
  //发表新的进度
  newSchedule() {
    location.href = '#ion0';
    console.log("******************newSchedule***************");
    console.log(JSON.stringify(this.userOrder));
    console.log("******************newSchedule***************");
    this.navCtrl.push(NewSchedulePage, { "id": this.userOrder.id, "list": this.orderScheduleList });
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
  reply2(i, id) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify({
      "id": "",
      "scheduleId": id,
      "name": this.userInfo.name,
      "content": this.content,
      "replyName": this.replyName,
      "replyId": "",
      "time": ""
    });

    this.http.post("content/addContentRecord", body, options).map(res => {
      console.log("*********************addContentRecord***********************************");
      console.log(res.json());
      console.log("*********************addContentRecord***********************************");
      var objList = eval('(' + res.json() + ')');
      if (objList.msg == 'true') {
        if (!this.orderScheduleList[i].reply) {
          this.orderScheduleList[i].reply = [];
        }
        this.orderScheduleList[i].reply.push({
          "id": "",
          "scheduleId": id,
          "name": this.userInfo.name,
          "content": this.content,
          "replyName": this.replyName,
          "replyId": "",
          "time": ""
        });
      } else {
        let toast = this.toastCtrl.create({
          message: '网络繁忙，请稍后再试！',
          duration: 3000
        });
        toast.present();
      }
      this.content = "";
      this.replyName = "";
      this.myplaceholder = '请输入回复内容…';
      // this.orderScheduleList = objList;
    }).subscribe(function (data) {
      console.log('1111');
    })
    // content/addContentRecord
    // var val = this.el.nativeElement.querySelector('#input'+i).value;


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
