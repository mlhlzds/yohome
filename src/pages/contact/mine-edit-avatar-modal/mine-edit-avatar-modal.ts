import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/Storage';
import { LoadingController, ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { FileObj } from "../../../model/FileObj";
import { LoginInfo } from "../../../model/UserInfo";

/**
 * Generated class for the MineEditAvatarModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-mine-edit-avatar-modal',
  templateUrl: 'mine-edit-avatar-modal.html',
})
export class MineEditAvatarModalPage {
  isChange: boolean = false;//头像是否改变标识
  avatarPath: String;
  fileObjList: FileObj[] = [];
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private http: Http, public navParams: NavParams, public viewCtrl: ViewController, public storage: Storage) {
    this.avatarPath = navParams.get('avatarPath');
    this.fileObjList.length = 1;//限定数组长度
  }
  //当进入页面时触发
  ionViewDidEnter() {
    if (this.fileObjList[0] != null) {
      this.avatarPath = this.fileObjList[0].base64;
      this.isChange = true;//头像是否改变标识
    }

  }

  ngAfterContentChecked() {
    if (!this.isChange) {
      this.ionViewDidEnter();
    }
    // if(this.fileObjList[0]==null){
    //   this.isChange = false;
    // }
    if (this.fileObjList[0] != null && this.avatarPath != this.fileObjList[0].base64) {
      this.isChange = false;
    }
  }




  saveAvatar() {
    if (this.isChange) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      let body = JSON.stringify({
        base64: this.avatarPath
      });
      this.http.post("/yuejia/user/updateUserImp", body, options).map(res => {
        var objList = eval('(' + res.json() + ')');
        if (objList.msg == 'true') {
          this.storage.get('LoginInfo').then((loginInfo: LoginInfo) => {//保存头像id,头像路径到缓存中
            loginInfo.user.avatarPath = this.avatarPath;
            this.storage.set('LoginInfo', loginInfo);
          });

          this.viewCtrl.dismiss({ 'avatarPath': this.avatarPath });
        } else {
          let toast = this.toastCtrl.create({
            message: '更换头像失败！',
            duration: 3000
          });
          toast.present();
        }
      }).subscribe(function (data) {
      })


    } else {
      this.dismiss();
    }
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }
}
