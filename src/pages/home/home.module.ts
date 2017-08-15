import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

import { NewSchedulePage } from './new-schedule/new-schedule';
import { ScheduleComplaintPage } from './schedule-complaint/schedule-complaint';
import { UserListPage } from './user-list/user-list';
import { UserListOrdersPage } from './user-list-orders/user-list-orders';
import { UserListOrdersInfoPage } from './user-list-orders-info/user-list-orders-info';
import { HomePage } from './home';
import { FilterUserPipe } from '../../pipes/search-info.pipe';

import { SharedModule } from '../../shared/shared.module';
@NgModule({
    imports:[
        IonicModule.forRoot(MyApp,{  
            backButtonText: '返回',  
        }),
        SharedModule
    ],
    declarations:[FilterUserPipe,HomePage,NewSchedulePage,ScheduleComplaintPage,UserListPage,UserListOrdersPage,UserListOrdersInfoPage],
    entryComponents:[HomePage,NewSchedulePage,ScheduleComplaintPage,UserListPage,UserListOrdersPage,UserListOrdersInfoPage],
    providers:[],
    exports:[IonicModule]
})

export class HomeModule {
    
}