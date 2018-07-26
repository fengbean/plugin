import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent }     from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

const heroRoutes: Routes = [
  { path: 'heroes', component: HeroListComponent },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: '',   redirectTo: '/crisis-center', pathMatch: 'full' },
];

@NgModule({
    imports:[
        RouterModule.forChild(heroRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class heroRoutingModule { }