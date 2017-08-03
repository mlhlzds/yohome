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
  styleUrls:['/test.scss']

})
export class TestPage {
  fileObjList: FileObj[] = [];
  thumb:Array<string> = new Array<string>(); //用于存放图片的base64 

  img_upload(event: any) { //单次提交图片的函数 
    
    var reader = new FileReader(); //创建一个FileReader接口 
    var guid = (new Date()).valueOf(); //通过时间戳创建一个随机数，作为键名使用 
    var file = event.target.files[0];

    reader.readAsDataURL(file); //FileReader的方法，把图片转成base64 
    var self = this;

   
    reader.onload = function (e) {
      self.thumb.push(this.result);
      
      console.log(guid);
    }


    // var data = new FormData(); //以下为像后台提交图片数据 
    // data.append('image', files[0]);
    // data.append('guid', this.guid);

  };
  constructor(private viewCtrl: ViewController,
    private nativeService: NativeService) {

  }
  img_del(key) {
    this.thumb.splice(key, 1);
  };
  cliTest(){
    console.log(this.thumb.length);
  }
  shouBigImage(img){
   
  }
}
