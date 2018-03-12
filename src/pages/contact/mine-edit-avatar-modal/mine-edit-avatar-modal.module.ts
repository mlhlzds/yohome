import { NgModule } from '@angular/core';
import { MineEditAvatarModalPage} from './mine-edit-avatar-modal';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../../shared/shared.module';
@NgModule({
  declarations: [MineEditAvatarModalPage],
  imports: [IonicPageModule.forChild(MineEditAvatarModalPage),SharedModule],
})
export class MineEditAvatarModalPageModule { }
