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
})
export class Test1Page {

  searchQuery: string = '';
  items: string[];
  itemsCopy: string[];

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
    this.itemsCopy = this.items;  
  }
  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      '111111',
      '22222',
      '333333'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();
    this.itemsCopy = this.items;
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.itemsCopy = this.itemsCopy.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Test1Page');
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }
}
