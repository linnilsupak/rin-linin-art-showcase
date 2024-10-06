import { AfterViewInit, Directive, ElementRef, inject, Renderer2 } from '@angular/core';
import { mainConfig } from '../core/config/main.config';

@Directive({
  selector: '[appAutoAdjustIframeHeightWidth]',
  standalone: true
})
export class AutoAdjustIframeHeightWidthDirective implements AfterViewInit {
  private render = inject(Renderer2);
  private el = inject(ElementRef);
  private prevHeight: number;
  private sameCount: number;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.el.nativeElement.tagName.toLowerCase() === 'iframe') {
      this.render.listen(this.el.nativeElement, 'load', () => {
        this.prevHeight = 0;
        this.sameCount = 0;
        setTimeout(() => {
          console.log(this.el.nativeElement.contentWindow.document.body.scrollHeight)
        }, mainConfig.timeoutAfterInit);

      });
    }
  }

}
