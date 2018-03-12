import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { User } from "../../model/User";
import { UserInfo, LoginInfo } from "../../model/UserInfo";
import { Storage } from '@ionic/Storage';
import 'rxjs/add/operator/map';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  homeObj = {};          //传过来的tab对象
  search: string;   //搜索框的内容
  userList: User[] = []; //如果这里不定义的话，或导致后面为undefined，因为我
  userInfo: any = null;
  //获得所有客户
  initUserList() {

    this.storage.get('LoginInfo').then((loginInfo: LoginInfo) => {
      this.userInfo = loginInfo.user;

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      let body = JSON.stringify({
        userId: this.userInfo.id,
        pageSize: '5',
        pageNo: '1'
      });

      this.http.post("user/allCust", body, options).map(res => {
        var objList = eval('(' + res.json() + ')');
        this.userList = objList;
      }).subscribe(function (data) {

      })
    });


    //获取用户所有订单结束结束
    // this.http.get('assets/data/userList2.json').map(res => {
    //   //   name: string;     //姓名
    //   // imgPath: string;  //图片路径
    //   // addr: string;     //家庭地址

    //   for(var i=0 ;i<res.json().length; i++){
    //     let obj = res.json()[i];
    //     let user = new User;
    //     user.addr = obj.adress;
    //     user.name = obj.info;
    //     user.imgPath = 'assets/img/avatar-ts-jessie.png';
    //     this.userList.push(user);
    //   }
    // }).subscribe(function (data) {

    // })
  }


  //跳转到所有订单
  toOrders(user: User) {
    console.log("============="+user+"=============="+this.homeObj );
    this.navCtrl.push('UserListOrdersPage', { user: user, homeObj: this.homeObj });
  }

  ionViewDidLoad() {
    this.initUserList();
  }
  constructor(private storage: Storage, private http: Http, public navCtrl: NavController, public navParams: NavParams) {

    this.homeObj = this.navParams.data;
  }
}
