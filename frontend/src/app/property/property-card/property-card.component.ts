import { Component } from "@angular/core";

//Component decorator will modify the behavior of the class but can also be used on properties of a class. It must also be declared in the app module
@Component({
    selector: 'app-property-card', //this is the name we'll use to call upon this in HTML documents
    //template: '<h1>I am a card</h1>', //here you can write any valid html you want to display
    templateUrl: 'property-card.component.html', //while using a 'template' is an option, it's much more feasible to have an actual file that will hold the HTML code
    //styles: ['h1{font-weight: normal;}'] //You can add css styles, optional but a nice detail for those artistically inclined
    styleUrls: ['property-card.component.css'] //I think it should come as a surprise to no one that styles is preffered to be it's own file. Also, you can have multiple css files on this since it seems to be structured like an array
  }
)
export class PropertyCardComponent{ //export is needed to use this class in other classes throught the use of import statements
  Property: any ={
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  } //con any podemos usar un objeto
}
