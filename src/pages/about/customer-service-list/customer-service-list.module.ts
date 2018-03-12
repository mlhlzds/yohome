import { NgModule } from '@angular/core';
import { CustomerServiceListPage} from './customer-service-list';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [CustomerServiceListPage],
  imports: [IonicPageModule.forChild(CustomerServiceListPage)],
})
export class CustomerServiceListPageModule { }
