import { IProperty } from './../iproperty';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //This tells the app that we want this service running at app root level, as such we much declare it in app.module.ts, it will also be available for the entire application
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const jsonData = JSON.stringify(data)
        const propertiesArray: Array<IProperty> = JSON.parse(jsonData);
        return propertiesArray;
      })
    );
  }
}
