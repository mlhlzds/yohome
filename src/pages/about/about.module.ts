import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { ArchivesPage } from './archives/archives';
import { CustomerServicePage } from './customer-service/customer-service';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports:[
        IonicModule.forRoot(MyApp),
        SharedModule
        
    ],
    declarations:[ArchivesPage,CustomerServicePage],
    entryComponents:[ArchivesPage,CustomerServicePage],
    providers:[],
    exports:[IonicModule]
})

export class AboutModule {
    
}