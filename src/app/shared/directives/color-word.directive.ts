import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[colorword]',
})
export class ColorWordDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // this.setBackgroundColor('yellow');
  }

  setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  @Input() set colorword(condition: boolean) {
    if (condition) {
      this.setBackgroundColor('pink');
    }
  }
}
