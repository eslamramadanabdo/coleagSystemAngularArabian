import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService <T> {

  constructor( public http : HttpClient , @Inject(String) public  API_URL : string ) { }
  
  get() : Observable<T> {
    return this.http.get<T>(this.API_URL);
  }

  getById(id:string): Observable<T>{
    return this.http.get<T>(this.API_URL + `/${id}`);
  }


  post(  obj : T ) : Observable<T>{
    return this.http.post<T>(this.API_URL , obj);
  }

  delete(id:number): Observable<T>{
    return this.http.delete<T>(this.API_URL + `/${id}`);
  }


  put( id:string  , obj : T ): Observable<T>{
    return this.http.put<T>(this.API_URL + `/${id}`  , obj);
  }
}
