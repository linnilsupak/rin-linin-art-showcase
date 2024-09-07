import { Directive, Input, Inject, PLATFORM_ID, ElementRef, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollPositionService } from './service/scroll-position.service';
import { combineLatest, Subscription } from 'rxjs';

@Directive({
  selector: '[appAddClassOnScrollPosition]',
  standalone: true
})
export class AddClassOnScrollPositionDirective implements OnDestroy {
  @Input() appAddClassOnScrollPosition: string;
  @Input() addClassDelay = 0;

  private isBrowser = false;
  private subscription = new Subscription();
  constructor(@Inject(PLATFORM_ID) platformId: Object,
  private scrollPositionService: ScrollPositionService,
  private el: ElementRef) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (!this.isBrowser) return;
    this.subscription.add(
      combineLatest([this.scrollPositionService.scrollPosition$, this.scrollPositionService.windowHeight$])
      .subscribe(([position, wHeight]) => {
        if ((this.el.nativeElement.offsetTop + (this.el.nativeElement.offsetHeight/2) - wHeight) < position) {
          setTimeout(() => {
            this.el.nativeElement.classList.add(this.appAddClassOnScrollPosition);
          }, this.addClassDelay);
        } else if(position === 0) {
          this.el.nativeElement.classList.remove(this.appAddClassOnScrollPosition);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
