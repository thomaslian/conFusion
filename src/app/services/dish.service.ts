import { Injectable } from '@angular/core';
import { Dish } from '../shared/Dish';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../shared/BASEURL';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  //Injecting HTTPClient in the constructor
  constructor(private http: HttpClient) { }

  // Returns all dishes as an array
  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(BASEURL + 'dishes');
  }

  // Returns one dish based on id input
  getDish(id: string): Observable<Dish> {
    return this.http.get<Dish>(BASEURL + 'dishes/' + id);
  }

  // Returns the dish that is marked featured
  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(BASEURL + 'dishes?featured=true')
    .pipe(map(dishes => dishes[0]));
  }

  // Returns all the IDs from all the dishes
  getDishIds(): Observable<string[] | any> {
    // Gets only all the ids from the dishes in a array
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }
}
