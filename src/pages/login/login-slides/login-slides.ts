import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../../tabs/tabs";
import { Slides } from 'ionic-angular';

import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-login-slides',
  templateUrl: 'login-slides.html',
})
export class LoginSlidesPage {
  // @ViewChild(Slides) slides: Slides;
  @ViewChild('ionSlides') slides;
  parType: any;
  slideObjects:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parType = navParams.data.type;
    this.slideObjects[0] = "assets/images/slide1.jpg";
    this.slideObjects[1] = "assets/images/slide2.jpg";
    this.slideObjects[2] = "assets/images/slide3.jpg";
  }

  toTabsPage() {
    this.navCtrl.push(TabsPage, { type: this.parType });
  }

  autoPlay() {
    this.slides.startAutoplay();
  }

  //页面进入时启动自动播放  
  ionViewDidEnter() {
    this.slides.startAutoplay();
  }

  //页面离开时停止自动播放  

  ionViewDidLeave() {
    this.slides.stopAutoplay();
  }
}
