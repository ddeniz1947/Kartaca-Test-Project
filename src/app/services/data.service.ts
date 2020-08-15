import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import data from '../dataFile/data.json';
import { BehaviorSubject, Observable, of } from 'rxjs';
data.primaryMain
   
@Injectable({
  providedIn: 'root'
})
export class DataService {

  getDataValue = new BehaviorSubject<any[]>(data);
  constructor(private http : HttpClient) { }
   newArrayData = [];

  // ISTENIRSE HTTP İLE DATA GET EDİLİP WEB API BAGLANTISI SAGLANABİLİR.

  // getData():Observable<any[]>{
  //   this.getDataValue = data;
  //   return data;
  // }

}
