import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ComposeMessageComponent } from './compose-message.component';

import { crisisModule }   from './crisis/crisis.module';
import { PageNotFoundComponent } from './not-found.component';
import {heroModule} from './heroes/hero.module';
import { LoginRoutingModule }      from './login-routing.module';
import { LoginComponent }          from './login.component';
import { AppRoutingModule } from './app-routing.module';
import { CitySelectModule } from './shared/citySelect/citySelect.module';
import {PagenationModule} from './shared/pagenation/pagenation.module';
import {SelectModule} from './shared/select/select.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { UnlessDirective } from './unless.directive';
import {DirectiveModule} from './directive/directive.module'
// import { NgZorroAntdModule } from 'ng-zorro-antd';
// import { TreeModule } from 'angular-tree-component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    ComposeMessageComponent,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    heroModule,
    crisisModule,
    LoginRoutingModule,
    AppRoutingModule,
    CitySelectModule,
    PagenationModule,
    SelectModule,
    NgxEchartsModule,
    DirectiveModule
    // TreeModule
    // NgZorroAntdModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
