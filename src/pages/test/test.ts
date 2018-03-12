import { Component, ElementRef, Input } from '@angular/core';
import { NavParams,NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
  styleUrls: ['/test.scss']

})
export class TestPage {

  testInfo: string;//存放测试结果的结果

  test1() {
    console.log("1232222222222");
    this.navCtrl.push("Test1Page");
  }
  // constructor(private http: Http, public navCtrl: NavController, private el: ElementRef, public navParams: NavParams) {
  // }
    constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
