import { Directive, ViewContainerRef ,TemplateRef ,Input} from '@angular/core';
 
@Directive({ selector: '[readonly]'})
export class ReadonlyDirective {
  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }

  @Input() set readonly(condition: boolean) {
    if (condition) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
        this.viewContainer.clear();
    }
  }
}
