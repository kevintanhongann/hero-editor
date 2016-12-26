import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./hero.service";
import {DashboardComponent} from "./dashboard.component";


// We've setup the initial route configuration. Now we'll add it to our AppModule. We'll add our configured RouterModule to the AppModule imports array.



// We use the forRoot method because we're providing a configured router at the root of the application. The forRoot method gives us the Router service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.


@NgModule({
  imports: [BrowserModule, FormsModule,  RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },{
      path: 'dashboard',
      component: DashboardComponent
    },{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }
    ])],
  declarations: [AppComponent, DashboardComponent, HeroDetailComponent, HeroesComponent],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule { }
