import { IProperty } from './../../iproperty';
import { Component, Input } from "@angular/core";

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
  @Input() CardInfo : IProperty //this will allow us to insert any property we want from property-lists html. We also can use any name in card HTML as this will detect inconsistencies in runtime and not before. EDIT modified for IProperty as it has a template of the data we're actually gonna be using, allowing vscode to dish out errors if something is mistyped
}
