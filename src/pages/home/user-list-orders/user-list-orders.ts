import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from "../../../model/User";
import { UserOrder } from "../../../model/UserOrder";

import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { UserListOrdersInfoPage } from '../user-list-orders-info/user-list-orders-info';

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
  userOrders: UserOrder[] = [];
  usre: User = new User;  //传过来的用户
  homeObj = {};//传过来的消息数量

  constructor(private http: Http,public navCtrl: NavController, public navParams: NavParams) {
    this.usre = navParams.get('user');
    this.homeObj = navParams.get('homeObj');

    if (this.homeObj['attrName'] > 0) {
      this.homeObj['attrName'] = this.homeObj['attrName'] - 1;
    }

    if (this.homeObj['attrName'] == 0) {
      this.homeObj['attrName'] = '';
    }
    this.initUserOrders();
  }

    //跳转到所有订单
  toOrderInfo(userOrder:UserOrder){
    this.navCtrl.push(UserListOrdersInfoPage,userOrder);
  }

  //初始化订单
  initUserOrders() {
    this.http.get('./assets/data/userOrders.json').map(res => {
      this.userOrders = res.json(); 
    }).subscribe(function (data) {
      console.log(data)
    })
  }

}
