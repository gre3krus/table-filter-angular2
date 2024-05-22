import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  newUser: any = {};
  addOpen: boolean = false

  constructor() {}

  ngOnInit(): void {
    
  }

  modalOpen(): any {
    this.addOpen = !this.addOpen
  }

  addNew(): any {
    this.jsonData.unshift({
      first_name: this.newUser.first_name,
      second_name: this.newUser.second_name,
      last_name: this.newUser.last_name
    });
    console.log(this.jsonData)
  }
}
