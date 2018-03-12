import { NgModule } from '@angular/core';
import { UserListOrdersPage} from './user-list-orders';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [UserListOrdersPage],
  imports: [IonicPageModule.forChild(UserListOrdersPage)],
})
export class UserListOrdersPageModule { }
