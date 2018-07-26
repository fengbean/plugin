import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterComponent} from './crisis-center.component';
import { CrisisListComponent }     from './crisis-list.component';
import { crisisdetailCponent } from './detail-crisis.component';
import { CrisisService } from './crisis.service';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import {CrisisCenterRoutingModule} from './crisis-center-routing.module';
import {DirectiveModule} from '../directive/directive.module'

@NgModule({
  declarations: [
    CrisisListComponent,
    crisisdetailCponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CrisisCenterRoutingModule,
    DirectiveModule
  ],
  providers: [CrisisService],
})
export class crisisModule { }
