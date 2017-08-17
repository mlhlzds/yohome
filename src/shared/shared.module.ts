import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {PaginationPage} from "./pagination-component/pagination";
import {SelectPic} from "./pic-viewer-component/select-pic";
import {ShowImg} from "./pic-viewer-component/show-img";
import {ViewerPicModule} from "./pic-viewer-component/viewer-pic.module";

@NgModule({
  imports: [IonicModule, ViewerPicModule],
  declarations: [PaginationPage, SelectPic,ShowImg],
  exports: [PaginationPage, SelectPic,ShowImg],
  providers: []
})
export class SharedModule {
}
