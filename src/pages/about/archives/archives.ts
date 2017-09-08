import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FileObj } from "../../../model/FileObj";
import { UserOrder } from "../../../model/UserOrder";
import { GoodsListPage } from '../goods-list/goods-list';
/**
 * Generated class for the ArchivesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-archives',
  templateUrl: 'archives.html',
})
export class ArchivesPage {

  originalSize:boolean = true;
  pdfSrc:string = 'assets/data/test.docx';
  page:number = 1;
  htList: FileObj[] = []; //所有图片
  userOrders: UserOrder;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("*******************商品清单this.userOrders************************")
    this.userOrders = navParams.data;
    console.log(JSON.stringify(this.userOrders));
    console.log("*******************商品清单this.userOrders************************")

    let f1: FileObj = new FileObj;
    f1.base64 = 'assets/img/ht1.jpg';
    f1.origPath = 'assets/img/ht1.jpg';
    f1.thumbPath = 'assets/img/ht1.jpg';

    let f2: FileObj = new FileObj;
    f2.base64 = 'assets/img/ht2.jpg';
    f2.origPath = 'assets/img/ht2.jpg';
    f2.thumbPath = 'assets/img/ht2.jpg';

    let f3: FileObj = new FileObj;
    f3.base64 = 'assets/img/ht3.jpg';
    f3.origPath = 'assets/img/ht3.jpg';
    f3.thumbPath = 'assets/img/ht3.jpg';

    let f4: FileObj = new FileObj;
    f4.base64 = 'assets/img/ht4.jpg';
    f4.origPath = 'assets/img/ht4.jpg';
    f4.thumbPath = 'assets/img/ht4.jpg';

    this.htList.push(f1);
    this.htList.push(f2);
    this.htList.push(f3);
    this.htList.push(f4);
  }
  doubleFun(){
    alert("1 ");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ArchivesPage');
  }
  toGoodsListPage(){
    this.navCtrl.push(GoodsListPage,this.userOrders);
  }


}
