import { Component,ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import { ScheduleComplaint } from "../../../model/ScheduleComplaint";
/**
 * Generated class for the ScheduleComplaintPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import { Content } from 'ionic-angular';
@Component({
  selector: 'page-schedule-complaint',
  templateUrl: 'schedule-complaint.html',
})
export class ScheduleComplaintPage{
  @ViewChild(Content) content: Content; //控制键盘
  differ: any;//数据更新
  constructor(private el: ElementRef, private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.getScheduleComplaintData();//加载投诉内容
  }
    funIonScroll(){
    console.log("funIonScroll");
  }
  funBlur(){
    // var contentBottom = this.content.contentBottom;
    // this.el.nativeElement.querySelector("#myinput").style.height= contentBottom+"px";
  }
  funFocus(event:any) {
    // var scrollHeight = this.content.scrollHeight;
    // var contentTop = this.content.contentTop;
    // var scrollDownOnLoad = this.content.scrollDownOnLoad;
    // var contentHeight = this.content.contentHeight;
    // var contentBottom = this.content.contentBottom;
    // console.log(this.el.nativeElement.querySelector("#myinput"));
    // this.el.nativeElement.querySelector("#myinput").style.height= contentBottom+60+"px";

  // alert("scrollHeight="+scrollHeight+"---contentTop="+contentTop+"---scrollDownOnLoad="+scrollDownOnLoad
  // +"contentHeight="+contentHeight+"---contentBottom="+contentBottom);
  }
  


  //投诉内容
  scheduleComplaintList: ScheduleComplaint[] = [];

  //获得进度投诉的内容
  getScheduleComplaintData() {
    this.http.get("assets/data/ScheduleComplaint.json").map(res => {
      this.scheduleComplaintList = res.json();
    }).subscribe(function (data) {
      console.log(data)
    })
  }
  hi:number = -200;
  //投诉回复
  replyStr:string = '';
  complaintReply(event: any) {
    var scheduleComplaint: ScheduleComplaint = new ScheduleComplaint;
    scheduleComplaint.id = "123";
    scheduleComplaint.dateTime = "9月7日 17:32";
    scheduleComplaint.content = this.replyStr;
    scheduleComplaint.headPortrait = "assets/img/avatar-ts-jessie.png";
    scheduleComplaint.msgType = true;

    this.scheduleComplaintList.push(scheduleComplaint);

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
  //   console.log(this.content.contentTop);
  // }
}
