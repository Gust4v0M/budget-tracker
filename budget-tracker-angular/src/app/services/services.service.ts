import { Injectable } from '@angular/core';
import { Transactions } from '../models/transactions';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private readonly apiKey= 'api/user'

  constructor(public httpClient: HttpClient) { }

  save(record: Transactions){
    return this.httpClient.post<Transactions>(this.apiKey, record)
  }
}
