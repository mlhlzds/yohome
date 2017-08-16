import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from "../../model/User";
import { UserOrder } from "../../model/UserOrder";

import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { UserListOrdersInfoPage } from '../home/user-list-orders-info/user-list-orders-info';
import { ArchivesPage } from "./archives/archives";
import { CustomerServicePage } from "./customer-service/customer-service";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  userOrders: UserOrder[] = [];
  usre: User = new User;  //传过来的用户
  homeObj = {};//传过来的消息数量
  pet:string = 'kittens';

  constructor(private http: Http,public navCtrl: NavController, public navParams: NavParams) {
   
    this.initUserOrders();
  }

  //跳转到所有订单
  toOrderInfo(userOrder:UserOrder){
    this.navCtrl.push(UserListOrdersInfoPage,{});
  }

  //档案
  toArchivesPage(){
    this.navCtrl.push(ArchivesPage,{});
  }

  //售后
  toCustomerServicePage(){
    this.navCtrl.push(CustomerServicePage,{});
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
