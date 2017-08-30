import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from "../../../model/User";
import { UserOrder } from "../../../model/UserOrder";
import { Http, RequestOptions, Headers } from '@angular/http';
import { UserListOrdersInfoPage } from '../user-list-orders-info/user-list-orders-info';

@Component({
  selector: 'page-user-list-orders',
  templateUrl: 'user-list-orders.html',
})
export class UserListOrdersPage {
  userOrders: UserOrder[] = [];
  usre: User = new User;  //传过来的用户
  homeObj = {};//传过来的消息数量

  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {
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
  toOrderInfo(userOrder: UserOrder) {
    this.navCtrl.push(UserListOrdersInfoPage, userOrder);
  }

  //初始化订单
  initUserOrders() {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    // let body = JSON.stringify({
    //   test:'test'
    // });

    // this.http.post("testServlet.json", body, options).map(res => {
    //   res.json();
    // }).subscribe(function (data) {
    //   console.log('1111');
    // })

    this.http.get('./assets/data/userOrders.json').map(res => {
      this.userOrders = res.json();
    }).subscribe(function (data) {
      console.log(data)
    })
  }

}
