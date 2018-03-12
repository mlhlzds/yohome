import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from "../../../model/User";
import { UserOrder } from "../../../model/UserOrder";
import { Http, RequestOptions, Headers } from '@angular/http';
import { Storage } from '@ionic/Storage';
import { UserInfo, LoginInfo } from "../../../model/UserInfo";

import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-user-list-orders',
  templateUrl: 'user-list-orders.html',
})
export class UserListOrdersPage {
  userOrders: UserOrder[] = [];
  usre: User = new User;  //传过来的用户
  homeObj = {};//传过来的消息数量
  userInfo: any = null;

  constructor(private storage: Storage, private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.usre = navParams.get('user');
    this.homeObj = navParams.get('homeObj');

    if (this.homeObj['attrName'] > 0) {
      this.homeObj['attrName'] = this.homeObj['attrName'] - 1;
    }
    if (this.homeObj['attrName'] == 0) {
      this.homeObj['attrName'] = '';
    }
    this.storage.get('LoginInfo').then((loginInfo: LoginInfo) => {
      this.userInfo = loginInfo.user;
      // this.initUserOrders();

    })

  }

  //跳转到所有订单
  toOrderInfo(userOrder: UserOrder) {
    this.navCtrl.push('UserListOrdersInfoPage', { "userOrder": userOrder,"userInfo":this.userInfo });
  }

  //初始化订单
  initUserOrders() {
    var loginInfo = this.storage.get('LoginInfo');

    // this.userInfo = loginInfo.user;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify({
      userId: this.usre.user_id,
      pageSize: '5',
      pageNo: '1'
    });
    //获取用户所有订单
    this.http.post("/yuejia/user/custInfoList", body, options).map(res => {
      // this.http.get('assets/data/userList2.json').map(res => {
      var objList = eval('(' + res.json() + ')');

      for (var i = 0; i < objList.length; i++) {
        var obj = objList[i];
        var uo = new UserOrder;
        uo.id = obj.contract_id;
        uo.addr = obj.adress;
        uo.name = obj.info;
        uo.state = obj.status;
        uo.recordNo = obj.recordNo;
        this.userOrders.push(uo);
      }

    }).subscribe(function (data) {

    })




    // this.http.get('./assets/data/userOrders.json').map(res => {
    //   this.userOrders = res.json();
    // }).subscribe(function (data) {

    // })
  }

  ionViewWillEnter(){
    this.userOrders.splice(0,this.userOrders.length);//
    this.initUserOrders();
  }

}
