import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { ArchivesPage } from './archives/archives';
import { GoodsListPage } from './goods-list/goods-list';
import { CustomerServicePage } from './customer-service/customer-service';

import { SharedModule } from '../../shared/shared.module';
//pdf
import { PdfViewerComponent } from 'ng2-pdf-viewer';
@NgModule({
    imports:[
        IonicModule.forRoot(MyApp),
        SharedModule
        
    ],
    declarations:[PdfViewerComponent,GoodsListPage,ArchivesPage,CustomerServicePage],
    entryComponents:[PdfViewerComponent,GoodsListPage,ArchivesPage,CustomerServicePage],
    providers:[],
    exports:[IonicModule]
})

export class AboutModule {
    
}