import { Component, ChangeDetectorRef  } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import {Storage} from '@ionic/Storage';
import {MineEditPage} from './mine-edit/mine-edit';
import { NewSchedulePage } from '../home/new-schedule/new-schedule';
import {UserInfo,LoginInfo} from "../../model/UserInfo";

import {MineEditModalPage} from './mine-edit-modal/mine-edit-modal';
import {MineEditAvatarModalPage} from './mine-edit-avatar-modal/mine-edit-avatar-modal';
import {WePage} from './we/we';
import { SettingPage } from './setting/setting';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  avatarPath: String ='assets/img/avatar-ts-buzz.png' ;
  userInfo: UserInfo;
  constructor(public navCtrl: NavController,private storage:Storage,private modalCtrl: ModalController,public changeDetectorRef: ChangeDetectorRef) {
        this.initUserInfo();
      
  }

ngAfterContentChecked(){
  this.changeDetectorRef.detectChanges();

}

  initUserInfo(){

     this.storage.get('LoginInfo').then((loginInfo: LoginInfo) => {
    console.log(loginInfo,'+++++++++++++++++++++++++++++++++++++++');
      let userInfo = loginInfo.user;
      if (userInfo) {
        this.userInfo = userInfo;
        this.avatarPath = userInfo.avatarPath;
      }
    });
  }

  // ionViewWillEnter() {
  //   this.storage.get('LoginInfo').then((loginInfo: LoginInfo) => {
  //   console.log(loginInfo,'+++++++++++++++++++++++++++++++++++++++');
  //     let userInfo = loginInfo.user;
  //     if (userInfo) {
  //       this.userInfo = userInfo;
  //       this.avatarPath = userInfo.avatarPath;
  //     }
  //   });
  // }


    edit() {
      console.log( this.userInfo);
    this.navCtrl.push(MineEditPage, {'userInfo': this.userInfo,'avatarPath':this.avatarPath});
    //  this.navCtrl.push(PersonEditPage);
  }

   viewAvatar($event) {
    $event.stopPropagation();
    let modal = this.modalCtrl.create(MineEditAvatarModalPage, {avatarPath: this.avatarPath});
    modal.present();
    modal.onDidDismiss(data => {
      data && (this.avatarPath = data.avatarPath)
    });
  }

    about() {
    this.navCtrl.push(WePage);
  }

  setting(){
    this.navCtrl.push(SettingPage);
}
}
