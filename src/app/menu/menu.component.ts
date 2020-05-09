import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/Dish';
import { DishService } from '../services/dish.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMess: string;

  constructor(private dishService: DishService,
    @Inject('BASEURL') private BASEURL) { }

  ngOnInit() {
    // Get dishes with observables
    // The component take hold of the subscribtion, and consume the 
    // values when the observable gets emitted
    this.dishService.getDishes()
      //1. dishes = object coming in when the observable values gets emitted
      .subscribe(dishes => this.dishes = dishes,
        errmess => this.errMess = <any>errmess);
  }
}
