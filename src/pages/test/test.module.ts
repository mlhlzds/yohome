import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { Test2Page } from './test2/test2';
import { TestPage } from './test';

import { SharedModule } from '../../shared/shared.module';


@NgModule({
    imports:[
        IonicModule.forRoot(MyApp),
        SharedModule
    ],
    declarations:[TestPage,Test2Page],
    entryComponents:[TestPage,Test2Page],
    providers:[],
    exports:[IonicModule]
})

export class TestModule {
    
}