import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { UserInfo, LoginInfo } from "../../model/UserInfo";
import { Http, RequestOptions, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginInfo: LoginInfo = null;
  userInfo: UserInfo;
  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams, private events: Events, private storage: Storage) {
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    // 初始化用户数据

    this.loginInfo = <LoginInfo>{
      access_token: 'test_test_test_test_test_test_test',
      user: {
        id: '1',
        username: 'nihao',
        name: '小军',
        email: 'yanxiaojun617@163.com',
        phone: '18688498342',
        phoneBak: '18688498343',
        avatar: '',
        avatarPath: 'assets/img/avatar-ts-jessie.png',
        description: '有图有真相，一本正经的胡说八道..',
        token: '',
        address: '上海市浦东新区杨高南路陆家嘴金融中心'
      }
    };

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify({
      username: username.value,
      password: password.value
    });

    this.http.post("/yuejia/user/login", body, options).map(res => { 
    // this.http.get("assets/data/userLogin.json").map(res => {
      console.log("==========================================================");
      console.log("==========================================================输出："+res.json());
              
       var objList = eval('(' + res.json() + ')');   
       let user = objList.user;     
         
      this.loginInfo = <LoginInfo>{
        access_token: 'test_test_test_test_test_test_test',
        user: {
          id: user.userId,
          username: user.username,
          name: user.name,
          email: 'yanxiaojun617@163.com',
          phone: user.phone,
          phoneBak: user.phone,
          avatar: '',
          avatarPath: 'assets/img/avatar-ts-jessie.png',
          description: '有图有真相，一本正经的胡说八道..',
          token: '',
          address: '上海市浦东新区杨高南路陆家嘴金融中心'
        }
      };
      //是否登录成功
      this.storage.set('LoginInfo', this.loginInfo).then((loginInfo: LoginInfo) => {
        console.log("000000000000000000000000000000000000");
        console.log(JSON.stringify(this.loginInfo));
        console.log("000000000000000000000000000000000000");
        console.log("---"+JSON.stringify(user));
        this.navCtrl.push(TabsPage, { type: objList.flag });
        console.log(JSON.stringify(this.loginInfo));
      });


    }).subscribe(function (data) {

    })


  }
}
