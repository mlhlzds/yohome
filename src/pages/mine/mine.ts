import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';

import {Platform, NavController, ModalController, AlertController} from 'ionic-angular';
import {MineEditPage} from './mine-edit/mine-edit';
import {MineEditAvatarModalPage} from './mine-edit-avatar-modal/mine-edit-avatar-modal';
import {UserInfo} from "../../model/UserInfo";
import {DEFAULT_AVATAR} from "../../providers/Constants";
import {AboutPage} from "./about/about";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})
export class MinePage {
  userInfo: UserInfo;
  avatarPath: string = DEFAULT_AVATAR;

  constructor(private navCtrl: NavController,
              private platform: Platform,
              private storage: Storage,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController) {
   
  }


  edit() {
   
  }

  viewAvatar($event) {
   
  }


  loginOut() {
    
  }

  exitSoftware() {
    
  }

  about() {
    
  }
}
