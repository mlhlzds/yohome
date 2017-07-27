import { Component,Input } from '@angular/core';
import { NavParams, App } from 'ionic-angular';

import { Test1Page } from './test1/test1'

/**
 * Generated class for the Test2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  @Input() content:string;
  constructor(private app:App, public navParams: NavParams) {
  }

  toPage1(){
     // this.navCtrl.push(Test1Page);
     this.app.getRootNav().push(Test1Page);
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad Test2Page');
  }

}
