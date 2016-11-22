/**
 * Created by kevin on 11/22/2016.
 */
import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {
  getHeroes(): void {
    return HEROES;
  } // stub
}

// TypeScript sees the @Injectable() decorator and emits metadata about our service, metadata that Angular may need to inject other dependencies into this service.

