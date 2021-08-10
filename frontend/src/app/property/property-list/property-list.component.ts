import { ActivatedRoute } from '@angular/router';
import { HousingService } from './../../services/housing.service';
import { Component, OnInit } from '@angular/core';
import { error } from '@angular/compiler/src/util';
import { IProperty } from '../iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  Homes: Array<IProperty>;

  constructor(private route: ActivatedRoute, private HousingService: HousingService) { } //This object will be provided through dependency injection

  ngOnInit(): void {
  if(this.route.snapshot.url.toString())
  {
    this.SellRent = 2; //Means we are on rent-property URL else we are on base URL
  }

  this.HousingService.getAllProperties(this.SellRent).subscribe(
    data=>{
      this.Homes = data;
      console.log(data);
    },
    error => {
      console.log('httperror:');
      console.log(error);
    }
    );
  }

}
