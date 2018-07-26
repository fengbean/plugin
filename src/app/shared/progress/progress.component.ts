import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  widthP = ( document.body.clientWidth - 450 - 140 - 50 ) / 2;
  @Input()
  step1= true;
  @Input()
  step2= false;
  @Input()
  step3= false;
  @Input()
  done= false;
}
