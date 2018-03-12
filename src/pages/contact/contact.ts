import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {App } from 'ionic-angular';  
import { LoginPage } from '../../pages/login/login';
import { UserInfo, LoginInfo } from "../../model/UserInfo";
import { Storage } from '@ionic/Storage';

import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  avatarPath: String = 'assets/img/avatar-ts-buzz.png';
  userInfo: UserInfo;
  constructor(private app: App,public navCtrl: NavController, private storage: Storage, private modalCtrl: ModalController, public changeDetectorRef: ChangeDetectorRef) {
    this.initUserInfo();

  }

  ngAfterContentChecked() {
    this.changeDetectorRef.detectChanges();

  }

  initUserInfo() {
    this.storage.get('LoginInfo').then((loginInfo: LoginInfo) => {
      let userInfo = loginInfo.user;
      if (userInfo) {
        this.userInfo = userInfo;           
        this.avatarPath = userInfo.avatarPath;
      }
    });
  }

  loginOut(){
    this.app.getRootNav().setRoot(LoginPage);  
  }
  // ionViewWillEnter() {
  //   this.storage.get('LoginInfo').then((loginInfo: LoginInfo) => {

  //     let userInfo = loginInfo.user;
  //     if (userInfo) {
  //       this.userInfo = userInfo;
  //       this.avatarPath = userInfo.avatarPath;
  //     }
  //   });
  // }


  edit() {
    this.navCtrl.push('MineEditPage', { 'userInfo': this.userInfo, 'avatarPath': this.avatarPath });
    //  this.navCtrl.push(PersonEditPage);
  }

  viewAvatar($event) {
    // $event.stopPropagation();
    // let modal = this.modalCtrl.create('MineEditAvatarModalPage', { avatarPath: this.avatarPath });
    // modal.present();
    // modal.onDidDismiss(data => {
    //   data && (this.avatarPath = data.avatarPath)
    // });

    this.navCtrl.push('MineEditAvatarModalPage', { avatarPath: this.avatarPath });

  }

  about() {
    this.navCtrl.push('WePage',{"welfare":this.userInfo.welfare});
  }

  setting() {
    this.navCtrl.push('SettingPage');
  }
}
