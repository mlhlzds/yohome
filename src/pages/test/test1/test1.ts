import { Component,Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { OrderSchedule } from "../../../model/OrderSchedule";

/**
 * Generated class for the Test1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-test1',
  templateUrl: 'test1.html',

})
export class Test1Page {
  teststr:string = '';
  @Input() orderScheduleList: OrderSchedule[] = [];
  toScheduleComplaint(){

  }
  testChange(){

  }
  doInfinite(){

  }
}
