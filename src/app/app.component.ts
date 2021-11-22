import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact-Book';
  name: any;
  email: any;
  phno: any;
  uploadimg: any;
  baseUrl: any;
  isDialogOpen: boolean = false;
  contacts: any = [
    {
      name: 'Kavin',
      email: 'kavin4996@gmail.com',
      phoneNumber: '9892348234',
    },
    {
      name: 'Manojj',
      email: 'manojj@gmail.com',
      phoneNumber: '9629448234',
    },
    {
      name: 'Karthick',
      email: 'karthick@gmail.com',
      phoneNumber: '7373145643',
    }
  ]
  addcontacts() {
    let x: any =
    {
      name: this.name,
      email: this.email,
      phoneNumber: this.phno,
      baseUrl: this.baseUrl,
    };
    this.contacts.push(x);
    console.log(this.contacts);
    this.isDialogOpen=false;
    this.name=null;
    this.email=null;
    this.phno=null;
    this.baseUrl=null;
  }
  add_contact() {
    if (!this.isDialogOpen) {
      this.isDialogOpen = true;
    }
    else {
      this.isDialogOpen = false;
    }
  }
}
