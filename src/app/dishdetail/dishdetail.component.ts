import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/Dish';
import { Comment } from '../shared/Comment';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
    selector: 'app-dishdetail',
    templateUrl: './dishdetail.component.html',
    styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    dish: Dish;
    errMess: string;
    comment: Comment;
    dishIds: string[];
    prev: string;
    next: string;
    commentForm: FormGroup;
    // Get access to template form and completly reset it
    @ViewChild('cform') commentFormDirective;
    dishcopy: Dish;

    formErrors = {
        'comment': '',
        'author': ''
    };

    validationMessages = {
        'comment': {
            'required': 'Comment is required.',
        },
        'author': {
            'required': 'Name is required.',
            'minlength': 'Name must be at least 2 characters long.'
        }
    };

    constructor(private dishService: DishService,
        private route: ActivatedRoute,
        private location: Location,
        private fb: FormBuilder,
        @Inject('BASEURL') private BASEURL) {

    }

    ngOnInit() {
        this.createForm();

        //getDishIds are sending out an observable, so we are subscribing to that observable.
        //Subscribing dishIds variable to the observable to get the parameter which is 
        ///  a string array.
        this.dishService.getDishIds()
            .subscribe(dishIds => this.dishIds = dishIds,
                errmess => this.errMess = <any>errmess);
        this.route.params
            .pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
            .subscribe(dish => { this.dish = dish; this.dishcopy = dish; this.setPrevNext(dish.id) }, 
            errmess => this.errMess = <any>errmess);
    }

    // When createForm() is called, it will create the reactive form 
    createForm() {
        //this.fb.group({}) - Allows us to define a FormGroup
        this.commentForm = this.fb.group({
            comment: ['', [Validators.required]],
            author: ['', [Validators.required, Validators.minLength(2)]],
            rating: 5
        });

        this.commentForm.valueChanges
            .subscribe(data => this.onValueChanged(data));




        this.onValueChanged(); // (re)set form validation messages
    }

    onValueChanged(data?: any) {
        //If the comment form is not created, return nothing
        if (!this.commentForm) { return; }
        const form = this.commentForm;
        for (const field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];
                    for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    }

    setPrevNext(dishId: string) {
        // Find the index of the current dish by using its dishId
        let index = this.dishIds.indexOf(dishId);
        // Getting the previous id of the current id in the array. If current id is 0,
        // it will go to the last id in the array instead
        this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
        this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    }

    goBack(): void {
        this.location.back();
    }

    onSubmit() {
        // Creates a javascript object from the form that can be passed into the Comment class
        this.comment = this.commentForm.value;
        // Add the current date to the comment object
        this.comment.date = new Date().toISOString();
        // Push the variables from the comment form
        this.dishcopy.comments.push(this.comment);
        // Send the new dish information to the server
        this.dishService.putDish(this.dishcopy)
            .subscribe(dish => {
                // dish will be the new dish that will be set to this.dish and this.dishcopy
                this.dish = dish; this.dishcopy = dish;
            },
            errmess => {this.dish = null; this.dishcopy = null; this.errMess = <any> errmess;});
        console.log(this.comment);
        // Reset the whole form (cleans error messages)
        this.commentFormDirective.resetForm();
        // Reset the form with the defualt values
        this.commentForm.reset({
            comment: '',
            author: '',
            rating: 5
        });
    }

}