import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import {Storage} from '@ionic/Storage';

import {UserInfo,LoginInfo} from '../../../model/UserInfo';
import {MineEditModalPage} from '../mine-edit-modal/mine-edit-modal';
import {MineEditAvatarModalPage} from '../mine-edit-avatar-modal/mine-edit-avatar-modal';

/**
 * Generated class for the MineEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-mine-edit',
  templateUrl: 'mine-edit.html',
})
export class MineEditPage {
  userInfo: UserInfo;
  avatarPath: String = 'assets/img/avatar-ts-buzz.png';
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public storage: Storage) {
    console.log(11111); 
        this.userInfo = this.navParams.get('userInfo');
    this.avatarPath = this.navParams.get('avatarPath');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MineEditPage');
  }
  ionViewWillEnter(){}
   ionViewDidEnter(){
     this.storage.get('LoginInfo').then((loginInfo: LoginInfo) => {
              this.avatarPath = loginInfo.user.avatarPath;
            }     
     );
   }

  openModal(){
    this.navCtrl.push(MineEditModalPage,{'userInfo':this.userInfo});
  }

    viewAvatar($event) {
    $event.stopPropagation();
    let modal = this.modalCtrl.create(MineEditAvatarModalPage, {avatarPath: this.avatarPath});
    modal.present();
    modal.onDidDismiss(data => {
      data && (this.avatarPath = data.avatarPath)
    });
  }


}
