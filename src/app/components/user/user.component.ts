import { Component,OnInit,} from '@angular/core';

import { JsonService } from 'src/app/user.service';
import { DataType } from 'src/app/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  jsonData: any[] = [];
  searchQuery: string = '';
  newUser: any = {};
  selectedUser?: DataType;
  addOpen: boolean = false;
  edOpen: boolean = false;
  infoOpen: boolean = false
  count: number = 100;

  constructor(private jsonService: JsonService) { }

  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe((data: any) => {
      this.jsonData = data;
    });
  }

  modalOpen(): any {
    this.addOpen = !this.addOpen
  }

  openInfo(): any {
    this.infoOpen = !this.infoOpen
  }

  phone(): any {
    this.newUser.phone = this.newUser.phone
    
    .replace(/[^\d\.]+/g,'')
    .replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, '+7($1) $2-$3-$4')
  }

  getInfo(item: DataType): any {
    this.selectedUser = item
  }

  addNew(): any {
    if(!this.newUser.first_name || !this.newUser.second_name || !this.newUser.last_name || !this.newUser.phone){
      alert('Поля ФИО и Телефон не заполнены')
    } else {
      this.count++
      this.newUser.id = this.count
      this.jsonData.unshift({
        id: this.newUser.id,
        first_name: this.newUser.first_name,
        second_name: this.newUser.second_name,
        last_name: this.newUser.last_name,
        gender: this.newUser.gender,
        phone: this.newUser.phone,
        adress: this.newUser.adress,
        birthday: this.newUser.birthday,
        educateion: [
          {
            educateion_name: this.newUser.educateion_high
          },
          {
            educateion_name: this.newUser.educateion_middle
          },
          {
            educateion_name: this.newUser.educateion_school
          }
        ],
        salary: this.newUser.salary,
        employment_date: this.newUser.employment_date,
        dismissal_date: this.newUser.dismissal_date
      });
      this.newUser = {}
    }
  }

  addEd(): any {
    this.edOpen = !this.edOpen
  }

  removeItem(id: number) {
    this.jsonData = this.jsonData.filter(item => item.id !== id )
  }
}

