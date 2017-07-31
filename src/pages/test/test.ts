import { Component, Input } from '@angular/core';
import { NavParams, App } from 'ionic-angular';

import { Test1Page } from './test1/test1'


import { ViewController } from 'ionic-angular';
import { NativeService } from "../../providers/NativeService";

import { FileObj } from "../../model/FileObj";


/**
 * Generated class for the Test2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(private viewCtrl: ViewController,
    private nativeService: NativeService) {

  }

  imgSrc: any = null;
  uploadDown(event: any) {
    var file = event.target.files[0];
    this.imgSrc=window.URL.createObjectURL(file);

        var self = this;
       

    if (!/image\/\w+/.test(file.type)) {
      alert("非图片");
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    let temp = null;
    var self = this;
    reader.onload = function (e) {
      
      self.imgSrc = this.result;//base64
    //  self.imgSrc.detectChanges();
      // alert(temp);
    }

   //  alert(JSON.stringify(reader));
 //   this.imgSrc = temp;
  //  alert(this.imgSrc);

  }


}
