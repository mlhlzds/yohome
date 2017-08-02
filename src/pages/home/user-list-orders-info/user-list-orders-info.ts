import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserOrder } from "../../../model/UserOrder";
import { NewSchedulePage } from '../new-schedule/new-schedule';
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
  userOrder: UserOrder = new UserOrder;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userOrder = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListOrdersInfoPage');
  }

  //新的进度
  newSchedule(){
    this.navCtrl.push(NewSchedulePage,{name:'123'});
  }

}
