import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { UserInfo, LoginInfo } from "../../model/UserInfo";
import {LoginSlidesPage} from "./login-slides/login-slides";
import { Http, RequestOptions, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { TestPage } from '../test/test';
import { LoadingController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginInfo: LoginInfo = null;
  userInfo: UserInfo;
  username:string;
  password:string;
  toast:any=null;
  constructor(public toastCtrl: ToastController, public loadingCtrl: LoadingController, private http: Http, public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.toast = toastCtrl;

    this.storage.get('LoginInfo').then(userInfo => {
      console.log(userInfo);
      if(userInfo != null){
         this.username = userInfo.user.username;
         this.password = userInfo.user.password;
      }
    });
  }

  testPage() {
    this.navCtrl.push(TestPage);
  }
  logIn() {
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
        descreption: '有图有真相，一本正经的胡说八道..',
        token: '',
        address: '上海市浦东新区杨高南路陆家嘴金融中心',
        userType: '',
        termsOfSale: '',
        welfare: '',
        password:''
      }
    };

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify({
      username: this.username,
      password: this.password
    });

    this.http.post("/yuejia/user/login", body, options).map(res => {
      // this.http.get("assets/data/userLogin.json").map(res => {

      var objList = eval('(' + res.json() + ')');
      if (objList.flag == false) {
        let toast = this.toastCtrl.create({
          message: '账号或者密码错误！',
          duration: 3000
        });
        toast.present();
      } else {
        let user = objList.user;

        this.loginInfo = <LoginInfo>{
          access_token: 'test_test_test_test_test_test_test',
          user: {
            id: user.userId,
            username: user.username,
            name: user.name,
            email: user.email,
            phone: user.phone,
            phoneBak: user.phone,
            descreption: user.descreption,
            avatar: '',
            avatarPath: user.imp,
            description: user.description,
            token: '',
            address: user.address,
            userType: objList.flag,
            termsOfSale: objList.termsOfSale,
            welfare: objList.welfare,
            afterSalePhone: objList.afterSalePhone,
            password:this.password
          }
        };
        this.storage.set('LoginInfo', this.loginInfo).then((loginInfo: LoginInfo) => {
          this.navCtrl.push(LoginSlidesPage, { type: objList.flag });
          //this.navCtrl.push(TabsPage, { type: objList.flag });
        });

      }
      //是否登录成功
    }).subscribe(function (data) {
      // let toast = this.toast.create({
      //   message: '网络繁忙，请稍后再试！',
      //   duration: 3000
      // });
      // toast.present();
    })


  }
}
