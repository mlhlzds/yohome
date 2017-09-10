import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { NavParams, App } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Content } from 'ionic-angular';
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
  styleUrls: ['/test.scss']

})
export class TestPage {

  testInfo:string;//存放测试结果的结果

  test1() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    //请求参数
    let body = JSON.stringify({
      pageSize: '5',
      pageNo: '1'
    });

    this.http.post("/yuejia/user/custInfoList", body, options).map(res => {

      var objList = eval('(' + res.json() + ')');  //返回的结果

      this.testInfo = JSON.stringify(objList);  //testInfo 用来给页面显示结果

      console.log(JSON.stringify(objList));
    }).subscribe(function (data) {

    })
  }
  constructor(private http: Http, private el: ElementRef, public navParams: NavParams) {
  }


}
