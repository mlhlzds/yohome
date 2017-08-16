import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { UserListOrdersPage } from './user-list-orders/user-list-orders';

import {User} from "../../model/User";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  search: string = '';
  url: string = 'assets/data/userlist.json';
  userList: User[] = []; //如果这里不定义的话，或导致后面为undefined，因为我

  //获得所有客户
  initUserList() {
    this.http.get(this.url).map(res => {
      this.userList = res.json(); //如果this.userList 没有在前面使用 =[] 创建对象，那么数据将会在除了{}外面就会被释放
      // for (let user of res.json()) {
      //   this.userList.push(<User>{
      //     'name': user.name,
      //     'imgPath': user.imgPath,
      //     'addr': user.addr
      //   })
      // }
    }).subscribe(function (data) {
      console.log(data)
    })
  }
  //测试通过
  // getAllOrder() {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });

  //   let body = JSON.stringify({
  //     code: "mk200"
  //   });

  //   this.http.post("testServlet.json", body, options).map(res => {
  //     console.log('22222222222222222'+res.json());
  //   }).subscribe(function (data) {
  //     console.log('1111');
  //   })
  // }      

  //跳转到所有订单
  toOrders(user:User){
    this.navCtrl.push(UserListOrdersPage,{user:user,homeObj:this.homeObj});
  }

  homeObj = {};
  constructor(private http: Http, public navCtrl: NavController,public navParams: NavParams) {
    this.initUserList();
    this.homeObj = this.navParams.data;
    //this.homeObj['attrName']=2;  父窗口的值也会被改变
    //this.getAllOrder();
  }

  //post
  // click2() {

  //   let headers = new Headers({ 'Content-Type': 'application/json' });

  //   let options = new RequestOptions({ headers: headers });

  //   this.http.post(this.url, JSON.stringify({ 'id': '1' }), options).subscribe(function (data) {

  //     console.log(data)

  //   })

  // }
}
