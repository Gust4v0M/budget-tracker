import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private readonly apiKey= 'api/user';

  constructor(public httpClient: HttpClient) { }

  // save(record: Transactions){
  //   console.log(this.apiKey, record)
  //   return this.httpClient.post<Transactions>(this.apiKey, record);
  // }

  save(record: Users) {
    console.log(this.apiKey, record);
    return this.httpClient.post<Users>(this.apiKey, record, {
      headers: { 'Content-Type': 'application/json' }
    });
  }


 list(){
  return this.httpClient.get<Users>(this.apiKey)
  .pipe(
    first(),
    delay(2000),

  );
}

 }


