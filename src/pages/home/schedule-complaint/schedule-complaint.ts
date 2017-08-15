import { Component, ElementRef, KeyValueDiffers } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';

import { ScheduleComplaint } from "../../../model/ScheduleComplaint";
/**
 * Generated class for the ScheduleComplaintPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-schedule-complaint',
  templateUrl: 'schedule-complaint.html',
})
export class ScheduleComplaintPage{
  differ: any;//数据更新
  constructor(private el: ElementRef, private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.getScheduleComplaintData();//加载投诉内容
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

  //投诉回复
  complaintReply(event: any) {
    var scheduleComplaint: ScheduleComplaint = new ScheduleComplaint;
    scheduleComplaint.id = "123";
    scheduleComplaint.dateTime = "9月7日 17:32";
    scheduleComplaint.content = event.target.value;
    scheduleComplaint.headPortrait = "assets/img/avatar-ts-jessie.png";
    scheduleComplaint.msgType = true;

    this.scheduleComplaintList.push(scheduleComplaint);

    event.target.value = "";
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
}
