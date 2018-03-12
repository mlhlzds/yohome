import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeService } from "../../../providers/NativeService";
import { YoHomePage } from "../yo-home/yo-home";
import { SoftwarePage } from "../software/software";
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-we',
  templateUrl: 'we.html'
})
export class WePage {

  welfare:string;
  welfares:string[];
  constructor(private navCtrl: NavController,private nativeService: NativeService, public navParams: NavParams) {
    this.welfare = this.navParams.data.welfare;

    this.welfares = this.welfare.split('<br/>');

  }

  yohome() {
    this.navCtrl.push(YoHomePage);
  }

  software() {
    this.navCtrl.push(SoftwarePage);
  }
}


