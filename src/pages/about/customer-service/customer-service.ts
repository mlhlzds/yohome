import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FileObj } from "../../../model/FileObj";
import { OrderSchedule } from "../../../model/OrderSchedule";
import { UserOrder } from "../../../model/UserOrder";
import { Content } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { LoadingController } from 'ionic-angular';

import { CustomerServiceNewPage } from '../customer-service-new/customer-service-new';
import { CustomerServiceListPage } from '../customer-service-list/customer-service-list';
/**
 * Generated class for the CustomerServicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-customer-service',
  templateUrl: 'customer-service.html',
})
export class CustomerServicePage {
  termsOfSale: string = '';

  userOrder: UserOrder;
afterSalePhone:string;
  constructor(public loadingCtrl: LoadingController, private actionSheetCtrl: ActionSheetController, private el: ElementRef, private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.termsOfSale = this.navParams.data.termsOfSale;
    this.userOrder = this.navParams.data.userOrder;
this.afterSalePhone = this.navParams.data.afterSalePhone;
   
  }

  toCustomerServiceNewPage(){
    this.navCtrl.push(CustomerServiceNewPage,{"termsOfSale":this.termsOfSale,"afterSalePhone":this.afterSalePhone,"userOrder":this.userOrder});
  }

  toCustomerServiceListPage(){
    this.navCtrl.push(CustomerServiceListPage,{"termsOfSale":this.termsOfSale,"userOrder":this.userOrder});
  }

}
