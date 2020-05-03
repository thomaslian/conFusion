import { Injectable } from '@angular/core';
import { Dish } from '../shared/Dish';
import { DISHES } from '../shared/DISHES';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  // Get dishes method. Makes use of observables
  getDishes(): Observable<Dish[]> {
    // of - Emits only one value from the observable
    // pipe - Lets us combine multiple finctions into a single function
    // delay - Delays the emitting of the value by two seconds using pipe
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter(dish => dish.id === id)[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter(dish => dish.featured)[0]).pipe(delay(2000));
  }

  getDishIds(): Observable<string[] | any> {
    // Gets dishes array, extracts all the IDs from the array
    // and give the id to the dish detail component (or the 
    // component asking for it)
    // Returns only an array of the ids
    return of(DISHES.map(dish => dish.id))
  }
}
