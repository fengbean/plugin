import { Component } from '@angular/core';
@Component({
  template: `
    <p *unlessButton="condition">Welcome to the Crisis Center</p>
  `
})
export class CrisisCenterHomeComponent { 
  // condition=true;
}