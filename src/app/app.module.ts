import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginComponent } from '../components/login/login';

//测试module C:\Users\ncbank\Desktop\github-ionic\yohome\src\pages\test\test.module.js
import { TestModule } from '../pages/test/test.module';
import { HttpModule } from "@angular/http";
import {LoginModule} from '../pages/login/login.module';
//自定义搜索管道
import { FilterUserPipe } from '../pipes/search-info.pipe';

//图片上传
import { NativeService } from '../providers/NativeService';

//登录做缓存
import {IonicStorageModule} from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回',
    }),
    TestModule,
    HttpModule,
    LoginModule,

    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NativeService
  ],
})
export class AppModule { }
