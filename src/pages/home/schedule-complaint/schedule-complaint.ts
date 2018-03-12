import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { UserOrder } from "../../../model/UserOrder";
import { ScheduleComplaint } from "../../../model/ScheduleComplaint";
import { UserInfo, LoginInfo } from "../../../model/UserInfo";
import { Storage } from '@ionic/Storage';


/**
 * Generated class for the ScheduleComplaintPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import { Content } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
@IonicPage()

@Component({
  selector: 'page-schedule-complaint',
  templateUrl: 'schedule-complaint.html',
})
export class ScheduleComplaintPage {
  @ViewChild(Content) content: Content; //控制键盘
  differ: any;//数据更新
  userOrder: UserOrder; //传过来的订单对象
  id: string;//进度id
  userType: string;//进度id
  userInfo: any = null;
  afterSalePhone:string;
  constructor(private actionSheetCtrl: ActionSheetController, private storage: Storage, private el: ElementRef, private http: Http, public navCtrl: NavController, public navParams: NavParams) {

    this.id = navParams.data.id;  //订单对象
    this.userType = navParams.data.userType;  //订单对象
    this.afterSalePhone=navParams.data.afterSalePhone;
    this.storage.get('LoginInfo').then((loginInfo: LoginInfo) => {
      this.userInfo = loginInfo.user;
      this.getScheduleComplaintData();//加载投诉内容
    });

  }
  funIonScroll() {

  }
  funBlur() {
    // var contentBottom = this.content.contentBottom;
    // this.el.nativeElement.querySelector("#myinput").style.height= contentBottom+"px";
  }
  funFocus(event: any) {
    // var scrollHeight = this.content.scrollHeight;
    // var contentTop = this.content.contentTop;
    // var scrollDownOnLoad = this.content.scrollDownOnLoad;
    // var contentHeight = this.content.contentHeight;
    // var contentBottom = this.content.contentBottom;

    // this.el.nativeElement.querySelector("#myinput").style.height= contentBottom+60+"px";

    // alert("scrollHeight="+scrollHeight+"---contentTop="+contentTop+"---scrollDownOnLoad="+scrollDownOnLoad
    // +"contentHeight="+contentHeight+"---contentBottom="+contentBottom);
  }



  //投诉内容
  scheduleComplaintList: ScheduleComplaint[] = [];

  delTs(scheduleComplaintId, i) {

    if (this.userInfo.userType != 'cust') {
      return;
    }
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
              complaintId: scheduleComplaintId
            });

            this.http.post("content/cancelComplaint", body, options).map(res => {
              var objList = eval('(' + res.json() + ')');
              if (objList.msg == 'true') {
                that.scheduleComplaintList.splice(i, 1);
              }
            }).subscribe(function (data) {
       
            })
          }
        },
        {
          text: '取消',
          role: 'cancel'
        }
      ]
    }).present();
  }

  //获得进度投诉的内容
  getScheduleComplaintData() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify({
      scheduleId: this.id + "",
      pageSize: '5',
      pageNo: '1'
    });
    this.http.post("content/complaint", body, options).map(res => {
      var objList = eval('(' + res.json() + ')');
      this.scheduleComplaintList = objList;
    }).subscribe(function (data) {
    })
    // this.http.get("assets/data/ScheduleComplaint.json").map(res => {
    //   this.scheduleComplaintList = res.json();
    // }).subscribe(function (data) {

    // })
  }
  hi: number = -200;
  //投诉回复
  replyStr: string = '';              
  complaintReply(event: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    var scheduleComplaint: ScheduleComplaint = new ScheduleComplaint;
    scheduleComplaint.id = "";

    scheduleComplaint.content = this.replyStr;
    scheduleComplaint.headPortrait = this.userInfo.avatarPath;
    scheduleComplaint.msgType = true;
    scheduleComplaint.scheduleId = this.id + "";

    let body = JSON.stringify(scheduleComplaint);
    this.http.post("content/addComplaint", body, options).map(res => {
      var objList = eval('(' + res.json() + ')');
      scheduleComplaint.dateTime = objList.msg;
      scheduleComplaint.id = objList.id;


      this.scheduleComplaintList.push(scheduleComplaint);

    }).subscribe(function (data) {
    })




    this.replyStr = "";

    //更改样式
    // event.target.style="transform:translate3d(0px,-150px, 0px) scale(1)"
  }

  sclCont: number = this.scheduleComplaintList.length;
  ngAfterViewChecked() {
    if (this.sclCont < this.scheduleComplaintList.length) {
      this.sclCont = this.scheduleComplaintList.length;

      //控制滚动条最下
      var messagelist = this.el.nativeElement.querySelector("#messageList");
      messagelist.scrollTop = messagelist.scrollHeight + 50;// - messagelist.height
    }

  }

  ////键盘
  //   @ViewChild(Content) content: Content;
  // scrollToTop() {
  //   this.content.scrollToTop();
  //   this.content.contentTop;
  //   alert("222");
  // }
  // resize(){
  //   alert("111");

  // }
}
