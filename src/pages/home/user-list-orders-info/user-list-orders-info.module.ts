import { NgModule } from '@angular/core';
import { UserListOrdersInfoPage} from './user-list-orders-info';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../../shared/shared.module';
@NgModule({
  declarations: [UserListOrdersInfoPage],
  imports: [IonicPageModule.forChild(UserListOrdersInfoPage),SharedModule],
})
export class UserListOrdersInfoPageModule { }
