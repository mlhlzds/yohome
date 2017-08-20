import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../../app/app.component';


import { ContactPage } from './contact';
import {MineEditPage} from './mine-edit/mine-edit';
import {MineEditModalPage} from './mine-edit-modal/mine-edit-modal';
import {MineEditAvatarModalPage} from './mine-edit-avatar-modal/mine-edit-avatar-modal';
import {WePage} from './we/we';
import { SharedModule } from '../../shared/shared.module';
import { FeedBackPage } from './feed-back/feed-back';
import { SettingPage } from './setting/setting';
import {YoHomePage} from "./yo-home/yo-home";
import {SoftwarePage} from "./software/software";


@NgModule({
    imports:[
        IonicModule.forRoot(MyApp,{  
            backButtonText: '',  
        }),
        SharedModule
    ],
    declarations:[ ContactPage,MineEditModalPage,MineEditPage,MineEditAvatarModalPage,WePage,FeedBackPage,SettingPage,YoHomePage,SoftwarePage],
    entryComponents:[ContactPage,MineEditModalPage,MineEditPage,MineEditAvatarModalPage,WePage,FeedBackPage,SettingPage,YoHomePage,SoftwarePage],
    providers:[],
    exports:[IonicModule]
})

export class ContactModule {
    
}