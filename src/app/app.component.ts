import { Component } from '@angular/core';

@Component({
 /*name of the component*/
  selector: 'app-root',
 /*everything is present according to the component*/
  /*what to show a class html or the body, this is the html of all the program and the home is inner*/
   /*nav is navigation class and the name of the classes are build in the html*/
/*    <div class='container'> presenting all the data from the --component--  [routerLink]="['/welcome']*/
   template: `
<nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/products']">Product List</a></li>
          </ul>
    </nav>
    <div class='container'>
    <router-outlet></router-outlet>
   </div>   
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Moovs-App';
}
