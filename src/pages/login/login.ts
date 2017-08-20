import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { UserInfo, LoginInfo } from "../../model/UserInfo";




import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginInfo: LoginInfo;
  userInfo: UserInfo;
  constructor(public navCtrl: NavController, public navParams: NavParams, private events: Events, private storage: Storage) {
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {

    // 初始化用户数据
    let loginInfo = <LoginInfo>{
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

    console.log('11111111', loginInfo);
    // this.events.publish('user:login', loginInfo);
    this.storage.set('LoginInfo', loginInfo).then((loginInfo: LoginInfo) => {
      console.log('444444', loginInfo);
    });
    this.navCtrl.push(TabsPage, { id: 111112222 });


    // if (username.value.length == 0) {
    //   console.log("请输入账号");
    // } else if (password.value.length == 0) {
    //   console.log("请输入密码");
    // } else {
    //   let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
    //   console.log(userinfo);
    //   this.navCtrl.push(TabsPage, {id: 111112222});
    // }
  }

}
