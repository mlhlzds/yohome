import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeService } from "../../../providers/NativeService";
import { YoHomePage } from "../yo-home/yo-home";
import { SoftwarePage } from "../software/software";

@Component({
  selector: 'page-we',
  templateUrl: 'we.html'
})
export class WePage {

  constructor(private navCtrl: NavController,
    private nativeService: NativeService) {
  }

  yohome() {
    this.navCtrl.push(YoHomePage);
  }

  software() {
    this.navCtrl.push(SoftwarePage);
  }
}


