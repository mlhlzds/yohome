import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {User} from "../../../model/User";
/**
 * Generated class for the UserListOrdersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-list-orders',
  templateUrl: 'user-list-orders.html',
})
export class UserListOrdersPage {
  usre:User;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.usre = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListOrdersPage');
  }

}
