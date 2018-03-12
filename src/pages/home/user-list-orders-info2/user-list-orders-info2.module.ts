import { NgModule } from '@angular/core';
import { UserListOrdersInfoPage2} from './user-list-orders-info2';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../../shared/shared.module';
@NgModule({
  declarations: [UserListOrdersInfoPage2],
  imports: [IonicPageModule.forChild(UserListOrdersInfoPage2),SharedModule],
})
export class UserListOrdersInfo2PageModule { }
