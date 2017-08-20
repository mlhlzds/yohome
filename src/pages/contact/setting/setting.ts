import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {FeedBackPage} from "../feed-back/feed-back";
import {NativeService} from "../../../providers/NativeService";


/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  versionNo: string = '1.0.1';


  constructor(public navCtrl: NavController, public navParams: NavParams,
               public nativeService: NativeService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

   feedBack() {
    this.navCtrl.push(FeedBackPage);
  }

    updateLog() {
    // this.navCtrl.push(UpdateLogPage);
     this.nativeService.showToast('暂无更新');
  }

  features() {
    this.nativeService.showToast('正在完善...');
  }

}
