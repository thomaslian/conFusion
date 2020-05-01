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
    // Return the promise immediately. Only works if you have the results
    // avilable immediately. We would have to rewrite the code if we are 
    // fetching the data from a server
    return Promise.resolve(DISHES);
  }

  getDish(id: string): Promise<Dish> {
    return Promise.resolve(DISHES.filter(dish => dish.id === id)[0]);
  }

  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.filter(dish => dish.featured)[0]);
  }
}
