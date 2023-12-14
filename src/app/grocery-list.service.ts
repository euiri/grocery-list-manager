import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GroceryListService {
  constructor() {}

  addItem(groceryList: string[], item: string) {
    groceryList.push(item);
  }
}