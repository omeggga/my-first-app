import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public propertyId:number;

  constructor(private route: ActivatedRoute) { } //ActivatedRoute can be used to access the information on a given route

  ngOnInit() {
    this.propertyId = this.route.snapshot.params['id']; //Var name needs to be the EXACT name given in app.component.html
  }

}
