import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage} from './about';
// //pdf
// import { PdfViewerComponent } from 'ng2-pdf-viewer';
@NgModule({
    imports:[
        IonicPageModule.forChild(AboutPage)
        
    ],
    declarations:[AboutPage],//PdfViewerComponent,
    entryComponents:[],//PdfViewerComponent,
    providers:[],
    exports:[IonicModule]
})

export class AboutModule {
    
}