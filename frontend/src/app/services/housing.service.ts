import { IProperty } from 'src/app/property/iproperty';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //This tells the app that we want this service running at app root level, as such we much declare it in app.module.ts, it will also be available for the entire application
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(SellRent: number): Observable<IProperty[]>{
    return this.http.get<any[]>('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];

        for (const id in data) {
          if(data.hasOwnProperty(id) && data[id].SellRent === SellRent)
          {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
