import { NgModule } from '@angular/core';
import { SettingPage} from './setting';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [SettingPage],
  imports: [IonicPageModule.forChild(SettingPage)],
})
export class SettingPageModule { }
