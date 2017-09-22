import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FileObj } from "../../../model/FileObj";
import { OrderSchedule } from "../../../model/OrderSchedule";
import { UserOrder } from "../../../model/UserOrder";
import { Content } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-customer-service-list',
  templateUrl: 'customer-service-list.html',
})
export class CustomerServiceListPage {
  @ViewChild(Content) content: Content;
  describe: string = '';
  termsOfSale: string = '';
  termsOfSales: string[];
  fileObjList: FileObj[] = []; //所有图片
  userOrder: UserOrder;
  customerList: Array<any> = [];
  constructor(public loadingCtrl: LoadingController, private actionSheetCtrl: ActionSheetController, private el: ElementRef, private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.termsOfSale = this.navParams.data.termsOfSale;
    this.userOrder = this.navParams.data.userOrder;

    this.termsOfSales = this.termsOfSale.split('<br/>');
    this.getAllOrder();
  }
  delSh(id, i) {
    // if (update_user_id != this.userInfo.id) {
    //   return;
    // }
    this.el.nativeElement.querySelector("#d" + i).style = "background-color:#989CA2";
    let that = this;
    that.actionSheetCtrl.create({
      buttons: [
        {
          text: '删除',
          role: 'destructive',
          handler: () => {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            let body = JSON.stringify({
              serviceId: id,  //订单id
              pageSize: this.pageSize + "", //页大小
              pageNum: this.pageNum + "" //当前页
            });

            this.http.post("contract/cancelContractService", body, options).map(res => {
              var objList = eval('(' + res.json() + ')');
              if (objList.msg == 'true') {
                that.customerList.splice(i, 1);
              } else {
                this.el.nativeElement.querySelector("#d" + i).style = "background-color:none;";
              }
            }).subscribe(function (data) {
              console.log('1111');
            })



            // that.fileObjList.splice(i, 1);
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            this.el.nativeElement.querySelector("#d" + i).style = "background-color:none;";
          }
        }
      ]
    }).present();

  }

  pageNum: number = 1;
  pageSize: number = 10;
  //获得所有订单
  getAllOrder() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify({
      orderId: this.userOrder.id,  //订单id
      pageSize: this.pageSize + "", //页大小
      pageNum: this.pageNum + "" //当前页
    });

    this.http.post("contract/getServiceInfo", body, options).map(res => {
      console.log("*********************打印进度***********************************");
      console.log(res.json());
      console.log("*********************打印进度***********************************");
      var objList = eval('(' + res.json() + ')');

      this.customerList = objList;
    }).subscribe(function (data) {
      console.log('1111');
    })




    // this.http.get("assets/data/OrderSchedule.json").map(res => {
    //   this.orderScheduleList = res.json();
    // }).subscribe(function (data) {
    //   console.log(data)
    // })

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

      var obj = { describe: this.describe, fileObjList: this.fileObjList };
      this.customerList.unshift(obj);

      console.log(this.fileObjList);
      this.describe = '';
      this.fileObjList = []; //所有图片
      loading.dismiss();
      this.content.scrollToTop(500);
    }).subscribe(function (data) {
    })
  }


  //往下拉 加载数据
  doInfinite(): Promise<any> {
    console.log('Begin async operation');
    return new Promise((resolve) => {
      setTimeout(() => {
        this.pageNum = this.pageNum + 1;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });


        var url = 'contract/contentList';


        let body = JSON.stringify({
          orderId: this.userOrder.id,  //订单id
          pageSize: this.pageSize + "", //页大小
          pageNum: this.pageNum + "" //当前页
        });


        this.http.post("contract/getServiceInfo", body, options).map(res => {

          var objList = eval('(' + res.json() + ')');
          for (var i = 0; i < objList.length; i++) {
            this.customerList.push(objList[i]);
          }
        }).subscribe(function (data) {
          console.log('1111');
        })

        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }
}
