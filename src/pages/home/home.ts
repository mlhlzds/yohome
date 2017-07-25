import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  url: string = './assets/data/userList.json';
  userList: User[];
  userListCopy: User[];
  initUserList() {
    this.http.get(this.url).map(res => {
      this.userList = res.json();
      //  console.log(this.userList);
    }).subscribe(function (data) {
      console.log(data)
    })
  }
 
  constructor(private http: Http, public navCtrl: NavController) {
    this.initUserList();
    this.userListCopy = this.userList;
  }
  getUsers(ev: any) {
    //this.initUserList();
    this.userList = this.userListCopy;
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.userList = this.userList.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  //post
  // click2() {

  //   let headers = new Headers({ 'Content-Type': 'application/json' });

  //   let options = new RequestOptions({ headers: headers });

  //   this.http.post(this.url, JSON.stringify({ 'id': '1' }), options).subscribe(function (data) {

  //     console.log(data)

  //   })

  // }
}
class User {
  name: string;
  imgPath: string;
  addr: string;
}
