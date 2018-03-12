import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UserListPage } from './user-list/user-list';
import { HomePage } from './home';
import { FilterUserPipe } from '../../pipes/search-info.pipe';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    imports:[
        IonicPageModule.forChild(HomePage)
    ],
    declarations:[FilterUserPipe,HomePage,UserListPage],
    entryComponents:[HomePage,UserListPage],
    providers:[]
})

export class HomeModule {
    
}