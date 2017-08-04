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
  tabRoots: Object[];

  //初始化tabs
  constructor(public navParams: NavParams) {
    console.log(this.navParams.get('id'));
    this.tabRoots = [
      {             
        root: HomePage,
        tabTitle: 'Home',
        tabIcon: 'order',
        attrName: 6
      },
      {
        root: ContactPage,
        tabTitle: 'Contact',
        tabIcon: 'notifications',
        attrName: 2
      },
      {
        root: AboutPage,
        tabTitle: 'About',
        tabIcon: 'document',
        attrName: 3
      },
      {
        root: TestPage,
        tabTitle: 'test',
        tabIcon: 'app',
        attrName: 1
      }
    ];
    setInterval(() => {
      this.tabRoots[1]['attrName']++;
    }, 1000)


  }
}

