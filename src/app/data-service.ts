import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonDataUrl = "../assets/data/product-list.json";  // Path to the JSON file

  constructor(private http: HttpClient) { }

  getProductData(): Observable<any> {
    return this.http.get<any>(this.jsonDataUrl);
  }
}