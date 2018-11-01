import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select.component';
import {SelectShowComponent} from './select.component.1'
// import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    SelectComponent,
    SelectShowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // NgZorroAntdModule
  ],
  providers: [],
  exports:[SelectShowComponent]
})
export class SelectModule {

}
