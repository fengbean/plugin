import { Component } from '@angular/core';
import { Crisis,CrisisService } from './crisis.service';
import {ActivatedRoute, Router, Params } from '@angular/router'; 

@Component({
 template: `
     <h2>hero detail</h2>
     {{crisisPerson.id}}
     {{crisisPerson.name}}
  `
})

export class crisisdetailCponent{
    crisisPerson:Crisis;
    constructor(private ActivatedRoute:ActivatedRoute,private crisisService:CrisisService){

    }

    ngOnInit() {
    this.ActivatedRoute.params.subscribe((params: Params)=>this.findHero(params['order']))
  }

  findHero(id:number){
      this.crisisService.CRISES.forEach(element=>{
        if(element.id==id)
        {
          console.log("found",element);
          this.crisisPerson=element;
          console.log("aa"+this.crisisPerson);
        }
      })
    }
}
