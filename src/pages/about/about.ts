import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from "../../model/User";
import { UserOrder } from "../../model/UserOrder";

import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { UserListOrdersInfoPage } from '../home/user-list-orders-info/user-list-orders-info';
import { ArchivesPage } from "./archives/archives";
import { CustomerServicePage } from "./customer-service/customer-service";
import { Storage } from '@ionic/Storage';
import { UserInfo, LoginInfo } from "../../model/UserInfo";



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  state: string = '3';  //初始化选中全部订单
  userOrders: UserOrder[] = [];
  userInfo: any = null; //传过来的y=用户
  usre: User = new User;  //传过来的用户
  homeObj = {};//传过来的消息数量
  pet: string = 'kittens';

  constructor(private storage: Storage, private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.initUserOrders();
  }

  //进度
  toOrderInfo(userOrder: UserOrder) {
    this.navCtrl.push(UserListOrdersInfoPage, { "userOrder": userOrder,"userInfo":this.userInfo });
  }

  //档案
  toArchivesPage(userOrder) {
    this.navCtrl.push(ArchivesPage,userOrder);
  }

  //售后
  toCustomerServicePage() {
    this.navCtrl.push(CustomerServicePage, {});
  }

  flagLoginInfo: boolean = true;
  //初始化订单
  initUserOrders() {
    this.storage.get('LoginInfo').then((loginInfo: LoginInfo) => {
      this.userInfo = loginInfo.user;
      if (this.flagLoginInfo) {
        console.log("111111111111111111111111111111111111111");
        console.log(JSON.stringify(loginInfo));
        console.log("111111111111111111111111111111111111111");
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let body = JSON.stringify({
          userId: loginInfo.user.id,
          pageSize: '5',
          pageNo: '1'
        });
        this.http.post("/yuejia/user/custInfoList", body, options).map(res => {
          // this.http.get('assets/data/userList2.json').map(res => {
          var objList = eval('(' + res.json() + ')');
          for (var i = 0; i < objList.length; i++) {
            var obj = objList[i];
            var uo = new UserOrder;
            uo.id=obj.contract_id;
            uo.addr = obj.adress;
            uo.name = obj.info;
            uo.state = obj.status;
            this.userOrders.push(uo);
          }
          this.flagLoginInfo = false;
        }).subscribe(function (data) {
        })
      }
    });

  }

}
