import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { UserListPage } from './user-list/user-list';
import { UserListOrdersPage } from './user-list-orders/user-list-orders';
import { HomePage } from './home';
import { FilterUserPipe } from '../../pipes/search-info.pipe';

@NgModule({
    imports:[
        IonicModule.forRoot(MyApp),
    ],
    declarations:[FilterUserPipe,HomePage,UserListPage,UserListOrdersPage],
    entryComponents:[HomePage,UserListPage,UserListOrdersPage],
    providers:[],
    exports:[IonicModule]
})

export class HomeModule {
    
}