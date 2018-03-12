import { Component, ElementRef, ContentChildren } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { UserOrder } from "../../../model/UserOrder";
import { FileObj } from "../../../model/FileObj";
import { OrderSchedule } from "../../../model/OrderSchedule";
import { MineEditPage } from '../../contact/mine-edit/mine-edit';
import { Http, RequestOptions, Headers } from '@angular/http';
import { UserInfo, LoginInfo } from "../../../model/UserInfo";
import { Storage } from '@ionic/Storage';
import { LoadingController, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
@IonicPage()
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

  f: number = 1;  //进度

  constructor(private actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, public toastCtrl: ToastController, public loadingCtrl: LoadingController, private storage: Storage, private el: ElementRef, private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.userOrder = navParams.data.userOrder;  //订单对象
    this.userInfo = navParams.data.userInfo;  //订单对象
    if (this.userInfo != null) {
      this.getAllOrder();
    } else {
      this.f = 0;
      this.userInfo = UserInfo;
      this.userInfo.userType = "user2";
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
      descreption: '有图有真相，一本正经的胡说八道..',
      token: '',
      address: '上海市浦东新区杨高南路陆家嘴金融中心',
      userType: '',
      termsOfSale: '',
      welfare: '',
      password: ''

    }

    this.navCtrl.push('MineEditPage', { "userInfo": userInfo, "avatarPath": "assets/img/marty-avatar.png" });
  }


  dianZan(i, scheduleId) {
    if (this.userInfo.userType != 'cust' || this.orderScheduleList[i].isAdmire == 'true') {
      return;
    }
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify({
      scheduleId: scheduleId
    });

    this.http.post("content/admire", body, options).map(res => {
      var objList = eval('(' + res.json() + ')');
      if (objList.msg == 'true') {
        this.orderScheduleList[i].isAdmire = 'true';

      }
    }).subscribe(function (data) {

    })
  }

  inpFocus(i) {
    //.querySelector('input')
    this.el.nativeElement.querySelector('#input' + i).style = "border-top-width: 0px;border-right-width: 0px; border-bottom-width: 1px;border-left-width: 0px;width:80%;margin-left: 8px;margin-top: 2px;background-color:#FEFFFF";
  }

  inpBlur(i) {
    //.querySelector('input')
    this.el.nativeElement.querySelector('#input' + i).style = "border-top-width: 0px;border-right-width: 0px; border-bottom-width: 1px;border-left-width: 0px;width:80%;margin-left: 8px;margin-top: 2px;background-color:none";
  }
  delHf(update_user_id, contentRecordId, i, i2) {
    if (update_user_id != this.userInfo.id) {
      return;
    }
    this.el.nativeElement.querySelector("#p" + i2).style = "background-color:#989CA2";
    let that = this;
    that.actionSheetCtrl.create({
      buttons: [
        {
          text: '删除',
          role: 'destructive',
          handler: () => {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            let body = JSON.stringify({
              contentRecordId: contentRecordId
            });

            this.http.post("content/cancelContentRecord", body, options).map(res => {
              var objList = eval('(' + res.json() + ')');
              if (objList.msg == 'true') {
                that.orderScheduleList[i].reply.splice(i2, 1);
              }
            }).subscribe(function (data) {

            })



            // that.fileObjList.splice(i, 1);
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            this.el.nativeElement.querySelector("#p" + i2).style = "background-color:none;";
          }
        }
      ]
    }).present();
  }

  delJd(scheduleId, index) {
    let prompt = this.alertCtrl.create({
      title: '提示',
      message: "您确定要删除吗？",
      buttons: [
        {
          text: '确定',
          handler: data => {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            let body = JSON.stringify({
              contentId: scheduleId
            });

            this.http.post("content/cancelContent", body, options).map(res => {
              var objList = eval('(' + res.json() + ')');
              if (objList.msg == 'true') {
                this.orderScheduleList.splice(index, 1);
              } else {
                let toast = this.toastCtrl.create({
                  message: '删除失败，此进度已过24小时，无法删除！',
                  duration: 2000
                });
                toast.present();
              }
            }).subscribe(function (data) {

            })
          }
        },
        {
          text: '取消',
          handler: data => {

          }
        }
      ]
    });
    prompt.present();


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
      var objList = eval('(' + res.json() + ')');
      console.log(JSON.stringify(objList));
      this.orderScheduleList = objList;
    }).subscribe(function (data) {

    })
    // this.http.get("assets/data/OrderSchedule.json").map(res => {
    //   this.orderScheduleList = res.json();
    // }).subscribe(function (data) {

    // })

  }

  //通过地址 跳到这个地址的所有订单
  custJd(userOrder) {                            
    userOrder.id = userOrder.contract_id;
    this.navCtrl.push('UserListOrdersInfoPage2', { "userOrder": userOrder, "userInfo": this.userInfo });

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
      var objList = eval('(' + res.json() + ')');
      this.orderScheduleList = objList;
    }).subscribe(function (data) {
      ;
    })
  }

  //往下拉 加载数据
  doInfinite(): Promise<any> {

    return new Promise((resolve) => {
      setTimeout(() => {
        this.pageNum = this.pageNum + 1;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let body;
        var url = 'contract/contentList';
        if (this.f == 0) {
          url = 'content/allContent';
          body = JSON.stringify({
            pageSize: this.pageSize + "", //页大小
            pageNum: this.pageNum + "" //当前页
          });
        } else {
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

        })
        resolve();
      }, 500);
    })
  }

  //投诉
  toScheduleComplaint(id) {
    this.navCtrl.push('ScheduleComplaintPage', { "id": id, "userType": this.userInfo.userType, "afterSalePhone": this.userInfo.afterSalePhone });
  }
  //发表新的进度
  newSchedule() {
    this.navCtrl.push('NewSchedulePage', { "userInfo": this.userInfo, "id": this.userOrder.id, "list": this.orderScheduleList });
  }

  content: any = '';
  replyName: any;
  myplaceholder: any = '请输入回复内容…';
  replyToName(i, replyName) {
    this.replyName = replyName;

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
      var objList = eval('(' + res.json() + ')');
      if (objList.msg == 'true') {
        if (!this.orderScheduleList[i].reply) {
          this.orderScheduleList[i].reply = [];
        }
        this.orderScheduleList[i].reply.push({
          "id": objList.content_record_id,
          "scheduleId": id,
          "name": this.userInfo.name,
          "content": this.content,
          "replyName": this.replyName,
          "replyId": "",
          "update_user_id": this.userInfo.id,
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

    })

  }

  //這個方法導致 頁面進入會變卡
  // ionViewWillEnter() {

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
