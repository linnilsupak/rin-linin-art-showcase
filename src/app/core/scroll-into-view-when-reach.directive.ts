import { Directive, ElementRef, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { ScrollPositionService } from './service/scroll-position.service';
import { isPlatformBrowser } from '@angular/common';
import { combineLatest, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Directive({
  selector: '[appScrollIntoViewWhenReach]',
  standalone: true
})
export class ScrollIntoViewWhenReachDirective implements OnDestroy {
  private isBrowser = false;
  private reached = false;
  private isMobile = false;
  private subscription = new Subscription();
  constructor(@Inject(PLATFORM_ID) platformId: Object,
  private scrollPositionService: ScrollPositionService,
  private breakpointObserver: BreakpointObserver,
  private el: ElementRef) {
    this.isBrowser = isPlatformBrowser(platformId);
    breakpointObserver.observe([
      Breakpoints.XSmall,
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
    this.subscription.add(
      combineLatest([this.scrollPositionService.scrollPosition$, this.scrollPositionService.windowHeight$])
      .subscribe(([position, wHeight]) => {
        if (!this.isMobile && !this.reached && ((this.el.nativeElement.offsetTop + (this.el.nativeElement.offsetHeight/2) - wHeight) < position)) {
          console.log('reach', this.isMobile)
          this.reached = true;
          this.el.nativeElement.scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" })
        }  else if(position === 0) {
          this.reached = false;
        }
      })
    );

   }

   ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
