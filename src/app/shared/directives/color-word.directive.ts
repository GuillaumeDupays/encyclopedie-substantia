import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[color-word]',
})
export class ColorWordDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.setBackgroundColor('yellow');
  }

  setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
