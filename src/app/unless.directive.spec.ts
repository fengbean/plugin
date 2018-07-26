import { UnlessDirective } from './unless.directive';
import {Directive, Input, ElementRef, Renderer, HostListener,TemplateRef,ViewContainerRef} from "@angular/core";

describe('UnlessDirective', () => {
  it('should create an instance', () => {
    const directive = new UnlessDirective();
    expect(directive).toBeTruthy();
  });
});
