import { NgModule } from '@angular/core';
import { CustomerServicePage} from './customer-service';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [CustomerServicePage],
  imports: [IonicPageModule.forChild(CustomerServicePage)],
})
export class CustomerServicePageModule { }
