import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { UserListPage } from './user-list/user-list';
import { HomePage } from './home';

@NgModule({
    imports:[
        IonicModule.forRoot(MyApp),
    ],
    declarations:[HomePage,UserListPage],
    entryComponents:[HomePage,UserListPage],
    providers:[],
    exports:[IonicModule]
})

export class HomeModule {
    
}