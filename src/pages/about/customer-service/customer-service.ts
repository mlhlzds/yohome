import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FileObj } from "../../../model/FileObj";
import { OrderSchedule } from "../../../model/OrderSchedule";

import { Content } from 'ionic-angular';
/**
 * Generated class for the CustomerServicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-customer-service',
  templateUrl: 'customer-service.html',
})
export class CustomerServicePage {
   @ViewChild(Content) content: Content;
  describe: string = '';
  fileObjList: FileObj[] = []; //所有图片
  
  customerList:Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  newCustomer() {
    var obj = {describe:this.describe,fileObjList:this.fileObjList};
    this.customerList.unshift(obj);

    this.describe = '';
    this.fileObjList = []; //所有图片

    this.content.scrollToTop(500);
  }
}
