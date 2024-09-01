import { Directive, Input, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollPositionService } from './service/scroll-position.service';
import { combineLatest } from 'rxjs';

@Directive({
  selector: '[appAddClassOnScrollPosition]',
  standalone: true
})
export class AddClassOnScrollPositionDirective {
  @Input() appAddClassOnScrollPosition: string;

  private isBrowser = false;
  constructor(@Inject(PLATFORM_ID) platformId: Object,
  private scrollPositionService: ScrollPositionService,
  private el: ElementRef) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (!this.isBrowser) return;
    combineLatest([this.scrollPositionService.scrollPosition$, this.scrollPositionService.windowHeight$])
    .subscribe(([position, wHeight]) => {
      if ((this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight - wHeight) < position) {
        this.el.nativeElement.classList.add(this.appAddClassOnScrollPosition);
      } else if(position === 0) {
        this.el.nativeElement.classList.remove(this.appAddClassOnScrollPosition);
      }
    })
  }

}
