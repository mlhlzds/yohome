import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

//测试带参数
import { NavParams } from 'ionic-angular';
import { TestPage } from '../test/test';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

    i: number = 0;
    j: number = 0;
    k: number = 0;



  tabRoots: Object[];

  //初始化tabs
  constructor(public navParams: NavParams) {
    console.log(this.navParams.get('id'));
    this.tabRoots = [
      {             
        root: HomePage,
        tabTitle: 'Home',
        tabIcon: 'home',
        attrName: 'i'
      },
      {
        root: ContactPage,
        tabTitle: 'Contact',
        tabIcon: 'notifications',
        attrName: 'j'
      },
      {
        root: AboutPage,
        tabTitle: 'About',
        tabIcon: 'document',
        attrName: 'k'
      },
      {
        root: TestPage,
        tabTitle: 'test',
        tabIcon: 'app'
      }
    ];
    setInterval(() => {
      this.i++;
    }, 1000)


  }
}

