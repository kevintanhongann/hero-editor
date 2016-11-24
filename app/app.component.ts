import {Component} from "@angular/core";
/**
 * Created by kevin on 11/24/2016.
 */

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
    <my-heroes></my-heroes>
  `
})


export class AppComponent {
  title = 'Tour of Heroes'
}
