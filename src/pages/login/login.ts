import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { UserInfo, LoginInfo } from "../../model/UserInfo";
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
  constructor(public toastCtrl: ToastController, public loadingCtrl: LoadingController, private http: Http, public navCtrl: NavController, public navParams: NavParams, private events: Events, private storage: Storage) {
  }

  testPage() {
    this.navCtrl.push(TestPage);
  }
  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    // 初始化用户数据
    // let loader = this.loadingCtrl.create({
    //   content: "Please wait...",
    //   duration: 3000
    // });
    // loader.present();


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
        address: '上海市浦东新区杨高南路陆家嘴金融中心',
        userType:''
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
      console.log("==========================================================输出：" + res.json());

      var objList = eval('(' + res.json() + ')');
      if (objList.flag==false) {
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
            avatar: '',
            avatarPath: user.imp,
            description: user.description,
            token: '',
            address: user.address,
            userType:objList.flag
          }
        };
        this.storage.set('LoginInfo', this.loginInfo).then((loginInfo: LoginInfo) => {
          console.log("000000000000000000000000000000000000");
          console.log(JSON.stringify(this.loginInfo));
          console.log("000000000000000000000000000000000000");
          console.log("---" + JSON.stringify(user));
          this.navCtrl.push(TabsPage, { type: objList.flag });
          console.log(JSON.stringify(this.loginInfo));


        });

      }
      //是否登录成功
    }).subscribe(function (data) {
      let toast = this.toastCtrl.create({
        message: '网络繁忙，请稍后再试！',
        duration: 3000
      });
      toast.present();
    })


  }
}
