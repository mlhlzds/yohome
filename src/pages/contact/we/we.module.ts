import { NgModule } from '@angular/core';
import { WePage} from './we';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [WePage],
  imports: [IonicPageModule.forChild(WePage)],
})
export class WePageModule { }
