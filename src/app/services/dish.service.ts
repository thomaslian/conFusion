import { Injectable } from '@angular/core';
import { Dish } from '../shared/Dish';
import { DISHES } from '../shared/DISHES';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  // Get dishes method with promise. If the promise resolves 
  // (data gets delivered), then the result delivered by the
  // getDishes promise, would be a dish array.
  getDishes(): Promise<Dish[]> {
    // Create a new promise that will resolve after the 
    // server returns the data
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(DISHES), 2000)
    }
    );
  }

  getDish(id: string): Promise<Dish> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(DISHES.filter(dish => dish.id === id)[0]), 2000);
    });
  }

  getFeaturedDish(): Promise<Dish> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(DISHES.filter(dish => dish.featured)[0]), 2000);
    });
  }
}
