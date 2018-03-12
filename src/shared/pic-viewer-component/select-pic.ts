import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NavController, ActionSheetController} from 'ionic-angular';
import {FileObj} from "../../model/FileObj";
import {NativeService} from "../../providers/NativeService";
import {ViewerPic} from "./viewer-pic";

/**
 * 自定义添加/预览图片组件
 * @description
 * @example <page-select-pic [(fileObjList)]="fileObjList"></page-select-pic>
 * @example <page-select-pic [max]="6" [allowAdd]="true" [allowDelete]="true" [(fileObjList)]="fileObjList"></page-select-pic>
 */
@Component({
  selector: 'page-select-pic',
  templateUrl: 'select-pic.html',
})
export class SelectPic {
  @Input() max: number = 4;  //最多可选择多少张图片，默认为4张


  @Input() destinationType: number = 1;  //期望返回的图片格式,默认1图片路径,0为返回图片base64

  @Input() allowAdd: boolean = true;  //是否允许新增

  @Input() allowDelete: boolean = true;  //是否允许删除

  @Input() fileObjList: FileObj[] = [];   //图片列表,与fileObjListChange形成双向数据绑定
  @Output() fileObjListChange = new EventEmitter<any>();

  constructor(public navCtrl: NavController,
              private actionSheetCtrl: ActionSheetController,
              private nativeService: NativeService) {
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
      self.fileObjList.push(fileObj);
    }
  };
  addPicture() {//新增照片
    let that = this;
    that.actionSheetCtrl.create({
      buttons: [
        {
          text: '从相册选择',
          handler: () => {
           
          }
        },
        {
          text: '拍照',
          handler: () => {
         
          }
        },
        {
          text: '取消',
          role: 'cancel'
        }
      ]
    }).present();
  }

  deletePicture(i) {//删除照片
    if (!this.allowDelete) {
      return;
    }
    let that = this;
    that.actionSheetCtrl.create({
      buttons: [
        {
          text: '删除',
          role: 'destructive',
          handler: () => {
            that.fileObjList.splice(i, 1);
          }
        },
        {
          text: '取消',
          role: 'cancel'
        }
      ]
    }).present();
  }

  viewerPicture(index) {//照片预览
    let picturePaths = [];
    for (let fileObj of this.fileObjList) {
      picturePaths.push(fileObj.origPath);
    }
    this.navCtrl.push('ViewerPic', {'initialSlide': index, 'picturePaths': picturePaths});
  }

  private getPictureSuccess(img) {
    let fileObj = <FileObj>{'origPath': img, 'thumbPath': img};
    this.fileObjList.push(fileObj);
    this.fileObjListChange.emit(this.fileObjList);
  }

}
