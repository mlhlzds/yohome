import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the Test1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-test1',
  templateUrl: 'test1.html',
  styleUrls: ['/test1.scss'],
})
export class Test1Page {

  i: number = 0;

  constructor() {
    setInterval(() => {
      this.i++;
    }, 1000)
  }

}
