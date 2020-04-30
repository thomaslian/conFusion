import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/Feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // Form group module that is hosting the reactive form
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;

  // Constructor purpose is to help prepare the creation of a new instance of the class
  // Instance - A object in memory
  constructor(private fb: FormBuilder) { 
    //Call the createForm class to build the form
    this.createForm();
  }

  ngOnInit() {
  }

  // When createForm() is called, it will create the reactive form 
  createForm() {
    //this.fb.group({}) - Allows us to define a FormGroup
    this.feedbackForm = this.fb.group({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  onSubmit(){
    // Creates a javascript object from the form that can be passed into the Feedback class
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  }

}


