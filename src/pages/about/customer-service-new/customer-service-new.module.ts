import { NgModule } from '@angular/core';
import { CustomerServiceNewPage} from './customer-service-new';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [CustomerServiceNewPage],
  imports: [IonicPageModule.forChild(CustomerServiceNewPage)],
})
export class CustomerServiceNewPageModule { }
