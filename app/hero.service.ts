/**
 * Created by kevin on 11/22/2016.
 */
import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}

// TypeScript sees the @Injectable() decorator and emits metadata about our service, metadata that Angular may need to inject other dependencies into this service.

// We're still mocking the data. We're simulating the behavior of an ultra-fast, zero-latency server, by returning an immediately resolved Promise with our mock heroes as the result.

