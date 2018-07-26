import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CitySelectComponent } from './citySelect.component';
import { CitySelectService} from './citySelect.service';

@NgModule({
  declarations: [
    CitySelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [CitySelectService],
  exports:[CitySelectComponent]
})
export class CitySelectModule {

}
