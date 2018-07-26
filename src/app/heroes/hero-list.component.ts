import { Component } from '@angular/core';
import { Router, Params } from '@angular/router'; 
import {Hero} from './hero';
import {heroService} from './hero-service';
@Component({
  template: `
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes"
        (click)  ="onSelect(hero)"
      >
        <span class="badge">{{ hero.id }}</span> {{ hero.name }}
      </li>
    </ul>
    <button routerLink="/sidekicks">Go to sidekicks</button>
  `
})
export class HeroListComponent {
  heroes:Hero[];
  constructor(
    private router: Router,private HeroService:heroService
  ) {
    this.heroes=HeroService.HEROES;
  }
  onSelect(hero:Hero)
  {
    this.router.navigate(['/hero',hero.id]);
  }
 }