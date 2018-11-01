import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
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
import {DatepickerModule} from './shared/datepicker/datepicker.module'
import {Draggable} from './Draggable.directive';
import {Hover} from './hover.directive';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import {ProgressModule} from './shared/progress/progress.module';

// AoT requires an exported function for factories
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n', '.json');
// }
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    ComposeMessageComponent,
    UnlessDirective,
    Draggable,
    Hover
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
    ProgressModule,
    NgxEchartsModule,
    DirectiveModule,
    DatepickerModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
    // TreeModule
    // NgZorroAntdModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
