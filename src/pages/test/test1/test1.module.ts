import { NgModule } from '@angular/core';
import { Test1Page} from './test1';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [Test1Page],
  imports: [IonicPageModule.forChild(Test1Page)],
  exports: [Test1Page]                       
})
export class Test1PageModule { }
