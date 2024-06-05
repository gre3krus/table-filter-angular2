import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class JsonService {
  constructor(private http: HttpClient) {}
  
  getJsonData(): Observable<DataType[]> {
    return this.http.get<DataType[]>('assets/API.json');
  }
}

export type DataType = {
  id: number,
  first_name: string,
  second_name: string,
  last_name: string,
  birthday: string,
  educateion: educateion[],
  gender: string,
  adress: string,
  phone: number,
  salary: number,
  employment_date: string,
  dismissal_date: string,
  is_dismissal: number,
  active: boolean,
  arrowDis: false,
}

export type educateion = { 
  educateion_id: number,
  educateion_name: string
}