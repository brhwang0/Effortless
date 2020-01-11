import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doctors = false;
  patients = false;
  providers = false;

  switchTab(tabName) {
    if(tabName == "Doctors"){
      this.doctors = true;
      this.patients = false;
      this.providers = false;
    }
    else if(tabName == "Patients"){
      this.doctors = false;
      this.patients = true;
      this.providers = false;
    }
    else if(tabName == "Providers"){
      this.doctors = false;
      this.patients = false;
      this.providers = true;
    }

  }

}
