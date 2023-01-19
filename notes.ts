/**
 *
 * * Setup Angular project:
 *  1- Install Angular/
 *  npm i -g angular/cli@version
 *
 *  2- Create new project
 *  ng new [projectName]
 *
 *  3- Change directory to the new generated angular project
 *  cd [projectName]
 *
 *  4- Run the Angular Project & open it:
 *  ng serve -o
 *  ng serve -o --port 5050
 *
 *  ------------------------
 *  * Generation using CLI:
 *  - Generate Component using CLI
 *  ng g c path/componentName
 *  ng g c movies --module=app.module.ts
 *
 *  - Generate Service using CLI
 *  ng g s path/serviceName
 *
 *  - Generate Directive using CLI
 *  - Generate Pipeline using CLI
 *  - Generate Module using CLI
 *  ng g m moduleName
 *
 *  - Generate to create the application routing module.
 *
 * content_copy
 * ng generate module app-routing --flat --module=app
 *
 *
 *---------------------
 *Dependency injection:
 *
 *  A design pattern and mechanism for creating and delivering some parts of an application (dependencies) to other parts of an application that require them.
 *
 *  force the class to invoke another class as a dependency..
 *Injecting or providing the dependencies on class into its constructor
 *
 *we use the DI to:
 * decuple (isolate) the component class from the dependency class.
 * and to apply the Singleton design pattern (create on instance from the class and use it everywhere).
 *
 *----------------------
 * * Angular Project Structure:
 *  - App:
 *    _models: contains the interfaces
 *    core: contains the core components
 *    shared: contains the shared components
 *    components:
 *    pipes:
 *    services:
 *
 *
 *-------------------------
 * * Adding Bootstrap to the project
 *  1. Install the Bootstrap Package:
 * npm i -S bootstrap
 *
 *  2. Adding the path of the package to the angular.json file
 *  "styles": [
 *  "./node_modules/bootstrap/dist/css/bootstrap.min.css",
 *  "src/styles.css"
 *  ],
 *  "scripts": [
 *  "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
 *  ]
 *
 *  3. Adding the path of the package to the style.css file
 *  @import "~bootstrap/dist/js/bootstrap.bundle.min.js"
 *
 *-------------------------
 *Note:
 *  Anything we creating in angular need to be registered to the app.modules or its related module..
 *
 *
 *  & Data Binding:
 *  A process that allows apps to display data values to a user and respond to user actions (such as clicks, touches, and keystrokes). In data binding, you declare the relationship between an HTML widget and a data source and let the framework handle the details.
 *
 * * 1- One way Data binding:
 * ^  a) source ==> view (template)
 *    - String Interpolation.. src = {{imgURL}} & <h2>{{title}}</h2>
 *    - Property Binding: Binding to DOM property
 *     [src]= "imgURL"  & <h2 [textContent]='title'></h2>
 *
 *
 *    - Attribute Binding: Binding to HTML attributes
 *     [attr.colspan]= 'myColspan'
 *
 *    - Class Binding.. [class.active]= "isActive" & [style.bgPink] = "bgColor"
 *    - Style Binding: Binding DOM style property
 *      [style.backgroundColor] = "isActive ? 'blue' : 'white'"
 *
 *
 * ^ b) view ==> source
 *    - Event Binding  (click)="onSave($event)"
 *      (target event)= 'template statement';
 *
 *    event propagation mechanism..
 *
 * * 2- Two Way Data Binding
 * ^ view ==> source ==> view
 *  - ngModel (banana in the box expression)
 *  - Property & Event Binding together.
 *  - @Input() ==>> Sending data form parent component to child one.
 *  @Input() used in the child component to receive value from parent component..
 *
 *  [childProperty]= 'parentProperty'
 *
 *
 *  -@Output() =>> Event Raising (from Child to parent)
 *  EventEmitter(); & .emit();
 *
 *  (ChildCustomEvent)="ParentRaisedEvent($event)"
 *
 *Note:
 *  It used in the child component to raise event (Execute the parent method from child component).
 *  EventEmitter(); ==> used to create new Custom Event.
 *  .emit(); ==> used to emit (run) the Custom Event.
 *
 *---------------------
 *  & Decorator
 *  it is a feature that provide a way to add annotations and meta-programming data syntax for class declarations
 *  A function that modifies a class or property definition. Decorators (also called annotations) are an experimental (stage 2) JavaScript language feature. TypeScript adds support for decorators.
 *
 *  & Content Projection:
 *    - ng-content =>> Child Component
 *    - ng-container =>> Parent Component
 *
 *
 *  & Directive:
 *  - The main responsibility for directives is to manipulate the DOM.
 *  - classes used to extend the HTML Behavior
 *  - classes that add new behavior or modify the existing behavior to the elements in the template
 *
 *  - Type of Directives:
 *    - Components are directives with a template.
 *    - Structural directive manipulate the DOM by adding or removing DOM elements.
 *    - Attribute directives modify the appearance or behavior of a DOM element.
 *
 *
 *    ^ - Component Directive ==>> class with view (Template)
 *   - <router-outlet></router-outlet>
 *   - router-outlet:	A directive that acts as a placeholder in a routing component's template. Angular dynamically renders the template based on the current router state.
 *
 *    ^ - Structural Directives ==>> control the structure of the layout
 *    (Whether the element rendered into the DOM or not)
 *
 *      -- *ngFor
 *        let i = index, let o = odd; let e = even; let f = first; let l = last;
 *        trackBy: trackByFunc..
 *
 *      -- *ngIf (Conditional Rendering =>> allows us to conditionally show or hide elements in the DOM based on a given expression)
 *  <p *ngIf="title === 'My Favorite Blogs'"> Dummy </p>
 *
 *      -- *ngSwitchCase  &  *ngSwitchDefault
 *
 *
 *      ^ - Attribute Directives ==>> control the appearance & Behavior of the element
 *      -- [ngStyle]
 *  <p [ngStyle]="{'font-size': title === 'Header' ? '48px' : '12px' }">This is the header.</p>
 *
 *      -- [ngClass]
 *      -- [ngSwitch]
 *
 *      -- [ngSwitch]  & *ngSwitchCase  &  *ngSwitchDefault
 *
 *  --------------------------
 *  & Form Validation:
 *    ^ a) Template Driven Validation
 *      Done in the Component Template (Template / View)..
 *    ng2-Validator library
 *
 *    ^ b) Reactive Validation
 *      Done in the Component Class (Source)
 *
 *    AbstractControl class:
 *      - FormGroup
 *      - FormControl
 *
 *
 *  Form Data Flow:
 *  * template (view) ===>> class (source) ===>> Service ===> Interceptor ===>> Backend ===>> Database
 *
 *  -----------------------------
 *  & Streams RxJS
 *  RxJS ==> Reactive Extensions for JS.
 *
 *
 *  Methods:
 *  - Interval
 *  - Subscribe
 *  - Take
 *  - Map
 *  -----------------------------
 *  & Shadow DOM & Encapsulation
 *    - Shadow DOM: allows us to apply Scoped Style to elements without bleeding out to the outer world..
 *    ViewEncapsulation ==> is an Enum in the Angular Specify the state of the Shadow DOM View.
 *    Shadow DOM ==> simply is Isolate the DOM Element style to Create scoped style..
 *
 *    1. encapsulation: ViewEncapsulation.Native => Deprecated
 *
 *
 *    2. encapsulation: ViewEncapsulation.Emulated (default option) => angular apply the Shadow DOM (View Encapsulation/Isolate Component
 *    Style) and change the class name of the HTML element, so the style applied to specific component doesn't affect the rest of components in the app.
 *
 *
 *    3. encapsulation: ViewEncapsulation.None =>
 *    Angular does not apply any sort of view encapsulation meaning that any styles specified for the component are actually globally applied and can affect any HTML element present within the application. This mode is essentially the same as including the styles into the HTML itself.
 *
 *    4. encapsulation: ViewEncapsulation.ShadowDom =>
 *
 *
 *
 *  -----------------------------
 *  & Observable:
 *  it is a way in Angular to use the asynchronous code..
 *  An Observable is an object that over time and asynchronously emits multiple data values (data stream).
 *  Observers: it is an object observe the database and send notification for the subscribers once it is changed..
 *  to use observer you must subscribe on it..
 *
 *  An Observable is just a function with a few special features, which uses an "observer" (an object with "next," "error" and "complete" methods) and returns an cancellation logic.
 *
 *  - Observables returns a 'stream' of data.
 *  - Code subscribe to the observable
 *  - Take andy actions accordingly
 *
 * ^ Observable vs Promise
 *  each of them is used to handel asynchronous requests.
 *  Promise ==> after the code is execute get a single return value (Succeed or filed).
 *  Observables ==> handel more than one asynchronous operation.
 *
 *  In the above images, note the progression of a promise. The code executes, then after getting a response from the server, it either fails or succeeds. A single value is returned, and no "stream" of data exists after a successful or failed request.
 *
 *  In contrast, the observable approach can handle more than one asynchronous operation. It can be canceled at any moment, attempt a retry, and even continue returning a stream of data.
 *
 *
 *  RxJS: Reactive Extension for JS.
 *  Reactive programming is an asynchronous programming paradigm concerned with data streams and the propagation of change.
 *
 *  RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code.
 *
 *  RxJS library includes a lot of tools for state management.
 *  -----------------------------
 *  & Status Code
 *  400 ==> Incorrect Data Body
 *  401 ==> Unauthorized
 *  403 ==> Cors Origin
 *  404 ==> Incorrect Path or Url
 *  409 ==> Duplicated parameters
 *
 *  500 ==> Internal Server Error
 *
 *  200 ==> Success
 *
 *  -------------------
 *  & Module:
 *  In general, a module collects a block of code dedicated to a single purpose. Angular uses standard JavaScript modules and also defines an Angular module, NgModule.
 *
 *  Modules are sets of closely-related capabilities, a way to organize our application into more focused, cohesive areas. When a component is registered to a module, it can be found (and used) by Angular.
 *
 *
 *  Root Module vs feature module
 *  root module: AppModule
 *  Feature module: it is a module generated for specific purpose. feature modules help you partition the application into focused areas.
 *
 *  a way to organize the project to a set of related components.
 *  -------------------
 *  & Component life-cycle:
 *  used to handel additional initialization tasks.
 *  It is a predefined methods of the component class allows us to run any code or logic during any particular stage of the component lifecycle.
 *
 *  - Predefined methods
 *  - Called automatically during specific points in time of the lifecycle: You won't need to manually invoke these functions in your application.
 *  - Optional
 *
 *  mounted (created) ==> changed ==> unmounted (destroyed)
 *
 *  ^ Constructor
 *  Run when the component is initialized. The best practice is to use it only for the Dependency injection.
 *
 *  - The constructor() is called before ngOnInit() in the component lifecycle. That is, data-bound properties (properties sent to the template to use them) haven't be set and ready to use yet. If we tried referencing a property in the constructor(), it would be an "undefined" value rather than the array we'd expect.
 *
 *  As such, the constructor() should generally only be used for dependency injection,   and not much more. Ideally, your constructor() functions should be kept relatively simple, and away from business logic.
 *
 *  ^ ngOnChanges(change: SimpleChange)
 *  - Run when the component is created, or when one of bound property with @Input changes
 *  - Runs after the Constructor.
 *  - Require @Input()
 *
 *  ^ ngOnInit()
 *  - It is a lifecycle method used to handle additional initialization tasks.
 *  - Call once the component is initialized. Runs after the constructor.
 *  - Used usually to fetch lookups from the server.
 *  - The ngOnInit() lifecycle method is called during the OnInit event, which occurs during the initializing phase of a component.
 *  - During this particular stage of the component lifecycle, Angular has already initialized all data-bound properties.
 *  - ngOnInit() is the best lifecycle method to use if we're looking to initialize a component with external data (e.g., from a server or from a JSON file)
 *
 *  ^ ngDoCheck()
 *  Runs when change detected
 *  - Used when subscribe to observable.
 *
 *  ^ ngAfterContentInit()
 *  Called after the content (ng-content directive) has been projected into the view
 *
 *  ^ ngAfterContentChecked()
 *  Called after every project content has been checked.
 *  Called after the ngOnInit() and with every ngDoCheck()
 *
 *  ^ ngAfterViewInit()
 *  Called after the component view (and child view) has been initialized.
 *
 *  ^ ngAfterViewChecked()
 *  Called every time the view (and child view) has been checked.
 *
 *  ^ ngOnDestroy()
 *  - The ngOnDestroy() is lifecycle method is called during the OnDestroy event, when a component is removed from the DOM.
 *  - Developers typically leverage ngOnDestroy() to add "clean-up" tasks at the end of a component's lifecycle. For example, a Stopwatch component can have its timer data reset.
 *
 *
 *
 *  ! splitting angular app to modules
 *
 *  ----------------------
 *  data-bound properties: @Input() & @Output()
 *
 *  data-bound properties
 *
 *
 *
 */
