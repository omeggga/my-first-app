import { HousingService } from './../../services/housing.service';
import { Component, OnInit } from '@angular/core';
import { error } from '@angular/compiler/src/util';
import { IProperty } from 'src/app/iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Homes: Array<IProperty>;

  constructor(private HousingService: HousingService) { } //This object will be provided through dependency injection

  ngOnInit(): void {
    this.HousingService.getAllProperties().subscribe(
      data=>{
        this.Homes = data;
        console.log(data)
      },
      error => {
        console.log('httperror:');
        console.log(error);
      }

    );
  }

}
