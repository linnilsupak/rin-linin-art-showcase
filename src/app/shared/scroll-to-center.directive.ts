import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { mainConfig } from '../core/config/main.config';

@Directive({
  selector: '[appScrollToCenter]',
  standalone: true
})
export class ScrollToCenterDirective implements AfterViewInit {
  @Input('appScrollToCenter') offsetVal = 0;
  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const xHalf = (this.el.nativeElement.scrollWidth - this.el.nativeElement.clientWidth) / 2;
      this.el.nativeElement.scrollLeft = xHalf - this.offsetVal;
    }, mainConfig.timeoutAfterInit);
  }

}
