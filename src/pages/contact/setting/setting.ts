import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { FeedBackPage } from "../feed-back/feed-back";
import { NativeService } from "../../../providers/NativeService";
import { LoadingController, ToastController } from 'ionic-angular';


/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  versionNo: string = '1.0.1';


  constructor(private http: Http, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams,
    public nativeService: NativeService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  feedBack() {
    this.navCtrl.push(FeedBackPage);
  }

  updateLog() {
    // this.navCtrl.push(UpdateLogPage);
    this.nativeService.showToast('暂无更新');
  }

  features() {
    this.nativeService.showToast('正在完善...');
  }

  updatePwd(pwd: HTMLInputElement, oldPwd: HTMLInputElement, oldPwd2: HTMLInputElement) {
    if (oldPwd.value != oldPwd2.value) {
      let toast = this.toastCtrl.create({
        message: '两次密码不一致！',
        duration: 1000
      });
      toast.present();
    } else {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      let body = JSON.stringify({
        pwd: oldPwd.value,
        oldPwd: pwd.value
      });

      this.http.post("user/updatePassword", body, options).map(res => {
        var objList = eval('(' + res.json() + ')');
        if (objList.flag == 'false') {
          let toast = this.toastCtrl.create({
            message: '密码错误！',
            duration: 1000
          });
          toast.present();
        } else {
          let toast = this.toastCtrl.create({
            message: '修改成功！',
            duration: 1000
          });
          toast.present();
          this.navCtrl.pop();
        }
        //是否登录成功
      }).subscribe(function (data) {
        let toast = this.toastCtrl.create({
          message: '网络繁忙，请稍后再试！',
          duration: 3000
        });
        toast.present();
      })
    }

  }
}
