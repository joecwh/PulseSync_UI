import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl : string = "https://localhost:7140/api/User/";
  constructor(private http : HttpClient) { }

  GetEmployees()
  {
    return this.http.get<any>(this.baseUrl + "GetEmployees");
  }

  GetFruitVeges()
  {
    return this.http.get<any>(this.baseUrl + "GetFruitveges");
  }
}
