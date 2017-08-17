import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { NavParams, App } from 'ionic-angular';

import { Content } from 'ionic-angular';
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
  styleUrls: ['/test.scss']

})
export class TestPage {
  @ViewChild(Content) content: Content;
  showToolbar: boolean = true;


  toggleToolbar() {
    this.showToolbar = !this.showToolbar;
    this.content.resize();
  }
  funIonScroll(){
    console.log("funIonScroll");
  }
  funBlur(){
    var contentBottom = this.content.contentBottom;
    this.el.nativeElement.querySelector("#myinput").style.height= contentBottom+"px";
  }
  funFocus(event:any) {
    var scrollHeight = this.content.scrollHeight;
    var scrollTop = this.content.scrollTop;
    var scrollDownOnLoad = this.content.scrollDownOnLoad;
    var contentHeight = this.content.contentHeight;
    var contentBottom = this.content.contentBottom;
    
    this.el.nativeElement.querySelector("#myinput").style.height= contentBottom+"px";

  //   alert("scrollHeight="+scrollHeight+"---contentBottom="+contentBottom+"---scrollDownOnLoad="+scrollDownOnLoad
  // +"contentHeight="+contentHeight+"---contentBottom="+contentBottom);
  }
  
  constructor(private el: ElementRef, public navParams: NavParams) {
  }

  ///////////////////////////////////////////////
  score: number = 0;
  stars: any[] = [false, false, false, false, false];
  toChange(n) {
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      this.stars.push(i <= n);

    }
    this.score = n + 1;
  }

  //////////////////组件测试///////////////////
  name: string;
  address: any;
}
