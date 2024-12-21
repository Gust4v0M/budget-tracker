import { Injectable } from '@angular/core';
import { Transactions } from '../models/transactions';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private readonly apiKey= 'api/transaction';

  constructor(public httpClient: HttpClient) { }

  save(record: Transactions){
    console.log(this.apiKey, record)
    return this.httpClient.post<Transactions>(this.apiKey, record);

  }

 list(){
  return this.httpClient.get<Transactions>(this.apiKey)
  .pipe(
    first(),
    delay(2000),
    tap(res => console.log(res))
  );
}

 }


