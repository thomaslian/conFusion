import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/Dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';


@Component({
    selector: 'app-dishdetail',
    templateUrl: './dishdetail.component.html',
    styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    dish: Dish;
    dishIds: string[];
    prev: string;
    next: string;

    constructor(private dishService: DishService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit() {
        //getDishIds are sending out an observable, so we are subscribing to that observable.
        //Subscribing dishIds variable to the observable to get the parameter which is 
        ///  a string array.
        this.dishService.getDishIds()
            .subscribe(dishIds => this.dishIds = dishIds);
        this.route.params
            .pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
            .subscribe(dish => {this.dish = dish; this.setPrevNext(dish.id)});
    }

    setPrevNext(dishId: string) {
        // Find the index of the current dish by using its dishId
        let index = this.dishIds.indexOf(dishId);
        // Getting the previous id of the current id in the array. If current id is 0,
        // it will go to the last id in the array instead
        this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
        this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
    }

    goBack(): void {
        this.location.back();
    }

}
