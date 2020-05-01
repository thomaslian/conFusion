import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/Dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    // Get dishes with promise
    // The component take hold of the promise, and retrive the 
    // results when the promise gets resolved
    this.dishService.getDishes()
    //1. dishes = object coming in when the promise resolves
      .then(dishes => this.dishes = dishes);
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
