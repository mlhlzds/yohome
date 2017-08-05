import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MinePage } from '../mine/mine';
import { HomePage } from '../home/home';
import { UserListOrdersInfoPage } from '../home/user-list-orders-info/user-list-orders-info';

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
        tabTitle: '我的客户',
        tabIcon: 'order',
        attrName: 6
      },
      {
        root: UserListOrdersInfoPage,
        tabTitle: '所有进度',
        tabIcon: 'notifications',
        attrName: 0
      },
      {
        root: MinePage,
        tabTitle: '我',
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
    //  this.tabRoots[1]['attrName']++;
    }, 1000)


  }
}

