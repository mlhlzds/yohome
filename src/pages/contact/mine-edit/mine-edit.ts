import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/Storage';

import { UserInfo, LoginInfo } from '../../../model/UserInfo';

/**
 * Generated class for the MineEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-mine-edit',
  templateUrl: 'mine-edit.html',
})
export class MineEditPage {
  userInfo: UserInfo;
  avatarPath: String = 'assets/img/marty-avatar.png';
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public storage: Storage) {

    this.userInfo = this.navParams.get('userInfo');
    this.avatarPath = this.navParams.get('avatarPath');
  }



  // ionViewDidEnter() {
  //   this.storage.get('LoginInfo').then((loginInfo: LoginInfo) => {
  //   //  this.avatarPath = loginInfo.user.avatarPath;
  //   }
  //   );
  // }

  openModal() {
    this.navCtrl.push('MineEditModalPage', { 'userInfo': this.userInfo });
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


}
