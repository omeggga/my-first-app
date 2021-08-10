import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public propertyId:number;

  constructor(private route: ActivatedRoute, private router: Router) { } //ActivatedRoute can be used to access the information on a given route

  ngOnInit() {
    this.propertyId = this.route.snapshot.params['id']; //Var name needs to be the EXACT name given in app.component.html
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id']; //this is so we can change the pages respective property (in this case id) while being in the page
      }
    );
  }

  onSelectNext()
  {
    this.propertyId++;
    this.router.navigate(['property-detail/' + this.propertyId]);
  }

}
