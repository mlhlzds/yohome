import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value=="yh001"){
      this.navCtrl.push(TabsPage, {type: 1}); //操作员
    }else{
      this.navCtrl.push(TabsPage, {type: 2}); //客户
    }
    
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
