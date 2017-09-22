import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FileObj } from "../../../model/FileObj";
import { OrderSchedule } from "../../../model/OrderSchedule";
import { UserOrder } from "../../../model/UserOrder";
import { Content } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';

import { CustomerServiceListPage } from '../customer-service-list/customer-service-list';
import { App } from 'ionic-angular';
import { LoadingController, AlertController } from 'ionic-angular';
@Component({
  selector: 'page-customer-service-new',
  templateUrl: 'customer-service-new.html',
})
export class CustomerServiceNewPage {
  describe: string = '';
  fileObjList: FileObj[] = []; //所有图片
  userOrder: UserOrder;
  termsOfSale: string = '';
  termsOfSales: string[];
  constructor(public alertCtrl: AlertController, private app: App, public loadingCtrl: LoadingController, private actionSheetCtrl: ActionSheetController, private el: ElementRef, private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.termsOfSale = this.navParams.data.termsOfSale;
    this.userOrder = this.navParams.data.userOrder;

    this.termsOfSales = this.termsOfSale.split('<br/>');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerServiceNewPage');
  }

  newCustomer() {
    let loading = this.loadingCtrl.create({
      content: '发表中...'//设置loading时显示的文字
    });
    loading.present();

    let orderSchedule: OrderSchedule = new OrderSchedule();
    orderSchedule.imgs = this.fileObjList;
    orderSchedule.describe = this.describe;
    orderSchedule.id = this.userOrder.id;


    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify(orderSchedule);
    this.http.post("contract/callService", body, options).map(res => {
      console.log(res.json());
      var objList = eval('(' + res.json() + ')');

      if (objList.msg == 'true') {
        let alert = this.alertCtrl.create({
          title: '提示',
          subTitle: '申请售后成功，可在售后详情中查看！',
          buttons: ['OK']
        });
        alert.present();
        // this.navCtrl.pop();
        // this.navCtrl.push(CustomerServiceListPage, { "termsOfSale": this.termsOfSale, "userOrder": this.userOrder });

      }

      console.log(this.fileObjList);
      this.describe = '';
      this.fileObjList = []; //所有图片
      loading.dismiss();
    }).subscribe(function (data) {
    })
  }

}
