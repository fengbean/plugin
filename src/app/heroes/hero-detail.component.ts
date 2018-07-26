import { Component } from '@angular/core';
import {ActivatedRoute, Router, Params } from '@angular/router'; 
import {Hero} from './hero';
import {heroService} from './hero-service';
@Component({
  template: `
     <h2>hero detail</h2>
     {{hero.id}}
     {{hero.name}}
  `
})
export class HeroDetailComponent {
  hero:Hero;
  constructor
  (private router:ActivatedRoute,
  private HeroService:heroService){

  }
  ngOnInit() {
    this.router.params.subscribe((params: Params)=>this.findHero(params['id']))
  }

findHero(id:number){
  this.HeroService.HEROES.forEach(element=>{
   if(element.id==id)
      {
        console.log("found",element);
        this.hero=element;
        console.log("aa"+this.hero);
      }
  })

  // for(var i=0;i<this.HeroService.HEROES.length;i++){
  //   if(this.HeroService.HEROES[i].id==id)
  //     {
  //       this.hero=this.HeroService.HEROES[i];
  //       console.log("aa"+this.hero);
  //       return null;
  //     }
  // }
 }

 }