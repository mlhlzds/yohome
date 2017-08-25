import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import {Storage} from '@ionic/Storage';


import { FileObj } from "../../../model/FileObj";
import {LoginInfo} from "../../../model/UserInfo";

/**
 * Generated class for the MineEditAvatarModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-mine-edit-avatar-modal',
  templateUrl: 'mine-edit-avatar-modal.html',
})
export class MineEditAvatarModalPage {
isChange: boolean = false;//头像是否改变标识
avatarPath: String;
fileObjList:FileObj[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public storage: Storage) {
    this.avatarPath=navParams.get('avatarPath');
    this.fileObjList.length = 1;//限定数组长度
  }
//当进入页面时触发
  ionViewDidEnter(){
if(this.fileObjList[0]!=null ){
      // console.log( this.fileObjList[0].base64);
       console.log( this.fileObjList,11111);
        this.avatarPath = this.fileObjList[0].base64;
        this.isChange = true;//头像是否改变标识
        
        console.log( this.fileObjList,222222);
    }
    
  }
  
  ngAfterContentChecked(){
   if (!this.isChange){
     this.ionViewDidEnter();
   }
    // if(this.fileObjList[0]==null){
    //   this.isChange = false;
    // }
       if(this.fileObjList[0]!=null && this.avatarPath != this.fileObjList[0].base64){
      this.isChange = false;
    }
  }

   saveAvatar() {
    if (this.isChange) {
      this.storage.get('LoginInfo').then((loginInfo: LoginInfo) => {//保存头像id,头像路径到缓存中
              // loginInfo.user.avatarId = avatarId;
              loginInfo.user.avatarPath = this.avatarPath;
              this.storage.set('LoginInfo', loginInfo);
            });
    this.viewCtrl.dismiss({'avatarPath': this.avatarPath});
    } else {
      this.dismiss();
    }
  }


  dismiss(){
     this.viewCtrl.dismiss();
  }
}
