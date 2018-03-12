import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import {FileObj} from "../../model/FileObj";


/**
 * 自定义上传图片组件
 * @description
 * @example <page-upload-picture [(fileObjList)]="fileObjList"></page-upload-picture>
 * @example 
 */

@Component({
  selector: 'page-upload-picture',
  templateUrl: 'upload-picture.html',
})
export class UploadPicturePage {

    @Input() fileObjList: FileObj[] = [];   //图片列表,与fileObjListChange形成双向数据绑定


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  img_upload(event: any) { //单次提交图片的函数 
    
    var reader = new FileReader(); //创建一个FileReader接口 
    var guid = (new Date()).valueOf(); //通过时间戳创建一个随机数，作为键名使用 
    var file = event.target.files[0];

    reader.readAsDataURL(file); //FileReader的方法，把图片转成base64 
    var self = this;

   
    reader.onload = function (e) {
      var fileObj = new FileObj();
      fileObj.base64 = this.result;
      fileObj.thumbPath = this.result;
      fileObj.origPath = this.result;
      self.fileObjList.unshift(fileObj);

    }
  };

}
