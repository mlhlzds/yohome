import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { UserListOrdersPage } from './user-list-orders/user-list-orders';
import { User } from "../../model/User";
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  homeObj = {};          //传过来的tab对象
  search: string = '';   //搜索框的内容
  userList: User[] = []; //如果这里不定义的话，或导致后面为undefined，因为我

  //获得所有客户
  initUserList() {
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

    this.http.get('assets/data/userlist.json').map(res => {
      this.userList = res.json(); //如果this.userList 没有在前面使用 =[] 创建对象，那么数据将会在除了{}外面就会被释放
    }).subscribe(function (data) {
      console.log(data)
    })
  }
  
  //跳转到所有订单
  toOrders(user:User){
    this.navCtrl.push(UserListOrdersPage,{user:user,homeObj:this.homeObj});
  }

  constructor(private http: Http, public navCtrl: NavController,public navParams: NavParams) {
    this.initUserList();
    this.homeObj = this.navParams.data;
  }
}
