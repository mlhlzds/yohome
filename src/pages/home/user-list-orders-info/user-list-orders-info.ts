import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserOrder } from "../../../model/UserOrder";
/**
 * Generated class for the UserListOrdersInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-list-orders-info',
  templateUrl: 'user-list-orders-info.html',
})
export class UserListOrdersInfoPage {
  userOrder: UserOrder = new UserOrder;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userOrder = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListOrdersInfoPage');
  }

}
