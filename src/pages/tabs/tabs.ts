import { Component } from '@angular/core';

//测试带参数
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: Object[];

  //初始化tabs
  constructor(public navParams: NavParams) {
    var logType = this.navParams.get('type');
    if(logType=="user"){
      this.tabRoots = [
      {             
        root: 'HomePage',
        tabTitle: '我的客户',
        tabIcon: 'people',
        attrName: 0
      },
      {
        root: 'UserListOrdersInfoPage',
        tabTitle: '所有进度',
        tabIcon: 'walk',
        attrName: 0
      },
      {
        root: 'ContactPage',
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
        root: 'AboutPage',
        tabTitle: '我的家',
        tabIcon: 'home',
        attrName: 0
      },
      {
        root: 'ContactPage',
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

