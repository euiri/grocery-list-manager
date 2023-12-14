import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GroceryListService {
  constructor() {}

  addItem(groceryList: string[], item: string) {
    groceryList.push(item);
    console.log(groceryList)
  }

  removeItem(groceryList: string[], item: string) {
    const index = groceryList.indexOf(item);

    if (index !== -1) {
      groceryList.splice(index, 1);
    }
  
    console.log(groceryList);
    return groceryList;
  }
}