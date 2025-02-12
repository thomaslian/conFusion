# Learning Angular
Leaning Angular with Coursera.
Course name: Front-End JavaScript Frameworks: Angular
Link: https://www.coursera.org/learn/angular

## Keywords
- Interpolation
- One-way data binding from data source to view target - Data flow between the component file and template (DOM) file (for example {{value}}, [property] = "value", bind-target="expression")
- One-way data binding from view target to data source - Data flow between the template file and the compnent file. (For example (target)="statement", on-target="statement")
- Two way data binding - Helps users exchange data from the component to the view (DOM), and the other way. (For example [(target)]="expression", bindon-target="expression")
- "Banana in a box" = [()]
- Promise - Mechanism that supports asynchronous computation. It represents a value that may be avilable now, in the future or never. Promises are an essential way of dealing with the delays when needing access and obtain data from a server.
- MVC framework
- MVVM framework
- Dependency Injection
- Angular services - Encompassing any value, function, or feature that an app needs
- Angular routing - For single page applications
- Angular decorators
- Angular components
- Angular structural directives - Responsible for HTML layout. Shape or reshape the DOM's structure (adding, removing, or manipulating elements). ngIf, ngFor and ngSwitch.
- Angular CLI - Command line interface for Angular
- Angular material module - Provide layout components that can be used when designing new templates for Angular components.
- Angular flex layout module - Provides support for using CSS flex within Angular templates for Angular components.
- HammerJS - (Used by Angular for supporting some gestures within the Angular application)
- Jasmine and Karma

## Angular and reactive programming (RxJS library)
- This course consentrates on reactive programming with RxJS in Angular
- Observable - "Observers" - If a observer observses a change in its state, it will notify all the observers of the change. The observers will take action based on the change.
- Reactive programming is based around observables.
- Observables is based around streams. Streams are the primary channel around which observables and which observable pattern is designed.
- Observables can subscribe to streams (and unsubscribe) or the observable
- The observable will emitt values, and the observables will react to this values
- Observables is a way of designing applications
- A observable is Lazy or Cold until some observer does a .subscribe(). When somebody starts subscribing to the observable, it becomes active or hot.
- Cancelling and retrying is very straigtforward with observables. In for example a promise, you cannot cancel, you are waiting. But a observable can be cancelled, and you do not have to worry about that anymore
- Reactive programming: How data flows through an application
- Angular has some built in observables. Forms, HTTP, AsyncPipe and change detection
- Observables
- Operators - Enables us to transform one set of values from an observable into another set of values, and then we end up creating a new observable.
- Marble Diagrams - A way of representing the reactive programming using observables

## Links
- https://angular.io/docs
- https://stackblitz.com/ - Editer for browser
- https://git-scm.com/docs - Git commands
- http://ndpsoftware.com/git-cheatsheet.html - Git cheatsheet
- https://github.com/johnpapa/lite-server -  Lite server
- https://cli.angular.io/ - Angular CLI
- https://material.angular.io/ - Angular Material
- https://angular-2-training-book.rangle.io/routing/routeparams - Read more about route params
- https://angular.io/guide/reactive-forms#generating-form-controls-with-formbuilder - Read more about reactive forms
- https://www.youtube.com/watch?v=3LKMwkuK0ZE - Video about RxJS, thinking reactively
- https://gist.github.com/staltz/868e7e9bc2a7b8c1f754 Read more about reactive programming

## Angular CLI commands
- ng help
- ng new <name> --style=scss (Create new angular application. Uses scss as css style)
- ng serve --open (Compile the project and open a tab in defualt browser)
- ng generate component menu (Generates a component named menu)
- ng generate service services/dish (Generates a new service called dish)
- ng g (short for ng generate)
- ng g module app-routing (Generates a module called app-routing)
- ng g directive directives/highlight (Create a directive called directive)
- ng test (Angular CLI starts testing)
- ng e2e (End to end tests using protractor)
- ng build --prod (Build the angular application to production)

# ConFusion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Material

Angular Material is used with version 6.4.7