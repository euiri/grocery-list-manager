import { Component } from '@angular/core';
import { GroceryListService } from './grocery-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grocery-list-manager';

  currentGroceryList: string[] = [];

  constructor(private groceryListService: GroceryListService){
    }

  doInput(event: {itemName: string, action: string}) {
    const userInput = event.itemName.trim()
    if (userInput !=='') {
      if (event.action == 'add') this.groceryListService.addItem(this.currentGroceryList, userInput);
        else this.currentGroceryList = this.groceryListService.removeItem(this.currentGroceryList, userInput);
    }

  }

}

// constructor(private weatherSevice: WeatherService){
//    }


// doSearch(serchValue:string) {
//   const userInput = serchValue.split(',').map(s => s.trim())
//   this.weatherSevice.getCurrentWeather(userInput[0],userInput[1]??undefined).subscribe(data => this.currentWeather = data)
// }
// }

  

