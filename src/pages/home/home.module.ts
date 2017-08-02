import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

import { NewSchedulePage } from './new-schedule/new-schedule';
import { UserListPage } from './user-list/user-list';
import { UserListOrdersPage } from './user-list-orders/user-list-orders';
import { UserListOrdersInfoPage } from './user-list-orders-info/user-list-orders-info';
import { HomePage } from './home';
import { FilterUserPipe } from '../../pipes/search-info.pipe';

@NgModule({
    imports:[
        IonicModule.forRoot(MyApp,{  
            backButtonText: '',  
        })
    ],
    declarations:[FilterUserPipe,HomePage,NewSchedulePage,UserListPage,UserListOrdersPage,UserListOrdersInfoPage],
    entryComponents:[HomePage,NewSchedulePage,UserListPage,UserListOrdersPage,UserListOrdersInfoPage],
    providers:[],
    exports:[IonicModule]
})

export class HomeModule {
    
}