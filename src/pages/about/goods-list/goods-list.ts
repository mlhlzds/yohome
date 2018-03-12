import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserOrder } from "../../../model/UserOrder";
import { Http, RequestOptions, Headers } from '@angular/http';
/**
 * Generated class for the GoodsListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import { IonicPage } from 'ionic-angular';
@IonicPage()

@Component({
  selector: 'page-goods-list',
  templateUrl: 'goods-list.html',
})
export class GoodsListPage {

  type: string;
  spqd: string;
  userOrders: UserOrder;
  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.userOrders = navParams.data.userOrders;
    this.type = navParams.data.type;
    this.initData();
    if (this.type == '1') {
      this.spqd = "商品清单";
    }
    if (this.type == '2') {
      this.spqd = "合同信息";
    }
    if (this.type == '3') {
      this.spqd = "施工设计";
    }

  }
  ionViewDidLoad() {

  }
  imgs: string[];
  initData() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify({
      orderId: this.userOrders.id,
      type: this.type
    });
    this.http.post("contract/contractInfo", body, options).map(res => {
      var objList = eval('(' + res.json() + ')');
      this.imgs = objList.imgs;
    }).subscribe(function (data) {
    })
  }
}
