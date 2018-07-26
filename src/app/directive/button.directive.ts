import {Directive, Input, ElementRef, Renderer, HostListener,TemplateRef,ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[unlessButton]'
})
export class ButtonDirective {
  @Input('unlessButton')
  set condition(newCondition: boolean) {
    if (newCondition) { // 创建模板对应的内嵌视图
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,
     private viewContainer: ViewContainerRef) {
  }

}
