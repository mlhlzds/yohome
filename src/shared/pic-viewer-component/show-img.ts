import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewerPic } from "./viewer-pic";
/**
 * Generated class for the ShowImgPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'show-img',
  templateUrl: 'show-img.html',
})
export class ShowImg {
  @Input() imgPath: string = '';

  constructor(public navCtrl: NavController) {
  }
  viewerPicture() {//照片预览
    let picturePaths = [];

    picturePaths.push(this.imgPath);

    this.navCtrl.push(ViewerPic, { 'initialSlide': 0, 'picturePaths': picturePaths });
  }
}
