import { Component } from '@angular/core';
import { Crisis,CrisisService } from './crisis.service';
import {Router,Params} from '@angular/router';
@Component({
  template: `
    <h2 *unlessButton="condition">crisislist</h2>
    <ul>
      <li *ngFor="let person of crisises" (click)="selectCrisis(person)">
        {{person.id}}
        <input type='text' value={{person.name}} />
      </li>
    </ul>
    <router-outlet></router-outlet>
    `
})
export class CrisisListComponent {
  // condition=true;
  crisises:Crisis[];
  constructor(public router:Router,public crisiservice:CrisisService){
    this.crisises=crisiservice.CRISES;
  }

  selectCrisis(person:Crisis){
    this.router.navigate(['/crisis-center',person.id]);
  }
 }