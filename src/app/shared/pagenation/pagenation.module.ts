import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PagenationComponent } from './pagenation.component';


@NgModule({
  declarations: [
    PagenationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports:[PagenationComponent]
})
export class PagenationModule {

}
