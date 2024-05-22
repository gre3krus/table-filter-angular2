import { Component, OnInit,} from '@angular/core';
import { JsonService } from 'src/app/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  jsonData: any[] = [];
  searchQuery: string = '';
  addOpen: boolean = false

  // readonly userForm = new FormGroup({
  //   balance: new FormControl(0),
  // });

  constructor(private jsonService: JsonService) { }

  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe((data: any) => {
      this.jsonData = data;
    });
  }

  removeItem(firstName: string) {
    this.jsonData = this.jsonData.filter(item => item.first_name !== firstName)
    console.log(this.jsonData);
  }
}

