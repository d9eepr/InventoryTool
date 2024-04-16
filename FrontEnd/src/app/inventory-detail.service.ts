import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from './inventory';
import { FormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class InventoryDetailService {

  private baseURL = "http://localhost:8080/";


  

  constructor(private http: HttpClient) { }
    getInventoryList() : Observable<Inventory[]>{
      return this.http.get<Inventory[]>(this.baseURL+"invdetails"); 
  }
  createInventory(invent: Inventory): Observable<Object>{
    return this.http.post(this.baseURL+"create",invent);
  } 

  deleteInventory(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL+"delete"}/${id}`);
  }
  updateInventory(id:number, invent: Inventory): Observable<Object>{
    return this.http.put(`${this.baseURL+"update"}/${id}`,invent);
  }
  searchInventory(id:number): Observable<any>{
    return this.http.get<any>(`${this.baseURL+"search"}/${id}`); 
  }


  

  
}
