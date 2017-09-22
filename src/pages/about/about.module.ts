import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { ArchivesPage } from './archives/archives';
import { GoodsListPage } from './goods-list/goods-list';
import { CustomerServicePage } from './customer-service/customer-service';

import { CustomerServiceNewPage } from './customer-service-new/customer-service-new';
import { CustomerServiceListPage } from './customer-service-list/customer-service-list';
import { SharedModule } from '../../shared/shared.module';
// //pdf
// import { PdfViewerComponent } from 'ng2-pdf-viewer';
@NgModule({
    imports:[
        IonicModule.forRoot(MyApp),
        SharedModule
        
    ],
    declarations:[GoodsListPage,ArchivesPage,CustomerServicePage,CustomerServiceNewPage,CustomerServiceListPage],//PdfViewerComponent,
    entryComponents:[GoodsListPage,ArchivesPage,CustomerServicePage,CustomerServiceNewPage,CustomerServiceListPage],//PdfViewerComponent,
    providers:[],
    exports:[IonicModule]
})

export class AboutModule {
    
}