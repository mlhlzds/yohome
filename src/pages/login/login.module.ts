
import { LoginPage } from './login';
import { LoginSlidesPage } from './login-slides/login-slides';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
;

@NgModule({
  imports: [IonicModule],
  declarations: [LoginPage, LoginSlidesPage],
  entryComponents: [LoginPage, LoginSlidesPage],
  providers: [],
  exports: [IonicModule]
})
export class LoginModule {
}
