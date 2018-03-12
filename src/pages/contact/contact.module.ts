import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { ContactPage } from './contact';
import { FeedBackPage } from './feed-back/feed-back';
import {YoHomePage} from "./yo-home/yo-home";
import {SoftwarePage} from "./software/software";
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    imports:[
        IonicPageModule.forChild(ContactPage),
        
    ],

    declarations:[ ContactPage,FeedBackPage,YoHomePage,SoftwarePage],
    entryComponents:[ContactPage,FeedBackPage,YoHomePage,SoftwarePage],
    providers:[],
    exports:[IonicModule]
})

export class ContactModule {
    
}