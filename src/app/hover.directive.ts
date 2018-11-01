
  import { Directive, ElementRef, HostListener, Input,EventEmitter,OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Directive({
    selector: '[hover]'
})
export class Hover implements OnInit {

    // mouseup = new EventEmitter<MouseEvent>();
    // mousedown = new EventEmitter<MouseEvent>();
    // mousemove = new EventEmitter<MouseEvent>();

    @HostListener('mouseenter') mouseover() {
        this.element.nativeElement.style.border = '1px solid red';
        this.element.nativeElement.querySelector('#tbl').style.border = '1px solid red';
      };
     
      @HostListener('mouseleave') mouseleave() {
        this.element.nativeElement.style.border = '';
      }

    constructor(public element: ElementRef) {

    }

    ngOnInit() {
       
    }
}