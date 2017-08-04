import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserOrder } from "../../../model/UserOrder";
import { NewSchedulePage } from '../new-schedule/new-schedule';

import { FileObj } from "../../../model/FileObj";
/**
 * Generated class for the UserListOrdersInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-list-orders-info',
  templateUrl: 'user-list-orders-info.html',
  styleUrls:['/user-list-orders-info.scss']
})
export class UserListOrdersInfoPage {
  fileObjList: FileObj[] = [];
  fo:FileObj = new FileObj();
  userOrder: UserOrder = new UserOrder;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userOrder = navParams.data;
      // <div class="imgDiv"><img src="assets/img/jiahao.png"></div>
      // <div class="imgDiv"><img src="assets/img/avatar-ts-buzz.jpg"></div>
      // <div class="imgDiv"><img src="assets/img/logo.jpg"></div>
      // <div class="imgDiv"><img src="assets/img/avatar-ts-woody.png"></div>

    this.fo.base64 = 'assets/img/avatar-ts-buzz.jpg' ;
    this.fo.thumbPath = 'assets/img/avatar-ts-buzz.jpg';
    this.fo.origPath = 'assets/img/avatar-ts-buzz.jpg';

    this.fileObjList.push(this.fo);
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListOrdersInfoPage');
  }

  //新的进度
  newSchedule(){
    this.navCtrl.push(NewSchedulePage,{name:'123'});
  }

}
