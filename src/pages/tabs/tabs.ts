import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

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
    var logType = this.navParams.get('type');
    console.log(this.navParams.get('type'));
    if(logType==1){
      this.tabRoots = [
      {             
        root: HomePage,
        tabTitle: '我的客户',
        tabIcon: 'people',
        attrName: 6
      },
      {
        root: UserListOrdersInfoPage,
        tabTitle: '所有进度',
        tabIcon: 'walk',
        attrName: 0
      },
      {
        root: ContactPage,
        tabTitle: '我',
        tabIcon: 'person',
        attrName: 0
      }
      // ,
      // {
      //   root: TestPage,
      //   tabTitle: 'test',
      //   tabIcon: 'app',
      //   attrName: 0
      // }
    ];
    }else{
      this.tabRoots = [
      {             
        root: AboutPage,
        tabTitle: '我的订单',
        tabIcon: 'people',
        attrName: 6
      },
      {
        root: ContactPage,
        tabTitle: '我',
        tabIcon: 'person',
        attrName: 0
      }
      // ,
      // {
      //   root: TestPage,
      //   tabTitle: 'test',
      //   tabIcon: 'app',
      //   attrName: 0
      // }
    ];
    }
    
    setInterval(() => {
    //  this.tabRoots[1]['attrName']++;
    }, 1000)


  }
}

