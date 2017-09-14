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

@Component({
  selector: 'page-goods-list',
  templateUrl: 'goods-list.html',
})
export class GoodsListPage {

  userOrders: UserOrder;
  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    console.log("*******************商品清单this.userOrders************************")
    this.userOrders = navParams.data;
    this.initData();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodsListPage');
  }
  initData() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify({
      orderId: this.userOrders.id,
      type: "1"
    });                          
    this.http.post("contract/contractInfo", body, options).map(res => {
      // this.http.get('assets/data/userList2.json').map(res => {
      var objList = eval('(' + res.json() + ')');
      console.log("***************getGoodsList***************");
      console.log(JSON.stringify(objList));
      console.log("***************getGoodsList***************");
    }).subscribe(function (data) {
    })
  }
}
