import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  url: string = './assets/data/userList.json';
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

  //跳转到所有订单
  toOrders(user:User){
    this.navCtrl.push(UserListOrdersPage,user);
  }

  constructor(private http: Http, public navCtrl: NavController) {
    this.initUserList();
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
