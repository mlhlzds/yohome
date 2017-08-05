/**
 * Created by yanxiaojun617@163.com on 12-23.
 */
import {Injectable} from '@angular/core';

import {FILE_SERVE_URL} from './Constants';
import {FileObj} from "../model/FileObj";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {NativeService} from "./NativeService";


/**
 * 上传图片到文件服务器
 */
@Injectable()
export class FileService {
  constructor(private nativeService: NativeService) {
  }

}