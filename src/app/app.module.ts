import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './Home/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import { StarComponent } from './shared/star.component';

@NgModule({
     /*the order is important beacuse some components depend on others*/
     declarations: [
    /*class name of component*/
      AppComponent,
    /*automatically added when creating a new component */
    WelcomeComponent,
  ],
  /*order isn't important*/
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      /*when presenting a component it's blue*/
      { path: 'welcome', component: WelcomeComponent },
      /*default route*/
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      /*if typed an error inside the URL*/
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  providers: [],

  /*at first all the mpdules are already set and the app starts from AppComponent 
  according to the paths that it requires and than to the component's html */
  bootstrap: [AppComponent]
})
export class AppModule { }
