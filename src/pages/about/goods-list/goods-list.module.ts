import { NgModule } from '@angular/core';
import { GoodsListPage} from './goods-list';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../../shared/shared.module';
@NgModule({
  declarations: [GoodsListPage],
  imports: [IonicPageModule.forChild(GoodsListPage),SharedModule],
})
export class GoodsListPageModule { }
