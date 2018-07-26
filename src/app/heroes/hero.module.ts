import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent }     from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import {heroService} from './hero-service';
import {heroRoutingModule} from './hero-routing.module';

@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    heroRoutingModule
  ],
  providers: [heroService],
})
export class heroModule { }
