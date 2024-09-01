import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { ScrollPositionService } from './service/scroll-position.service';
import { WINDOW, WINDOW_PROVIDERS } from './service/window.service';

@Directive({
  selector: '[appSetMainScrollPosition]',
  providers: [WINDOW_PROVIDERS],
  standalone: true
})
export class SetMainScrollPositionDirective implements OnDestroy {

  private scrollEvent$: Subscription;
  private isBrowser = false;
  
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (!this.isBrowser) return;
    this.scrollPositionService.setWindowHeight(this.window.innerHeight);
  }
  constructor(@Inject(PLATFORM_ID) platformId: Object,
    private scrollPositionService: ScrollPositionService,
    @Inject(WINDOW) private window: Window,
    private el: ElementRef) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (!this.isBrowser) return;
    this.scrollPositionService.setWindowHeight(window.innerHeight);
    this.scrollEvent$ = fromEvent(this.el.nativeElement, 
    'scroll').subscribe((e: any) => {
      this.scrollPositionService.setPosition(e.target.scrollTop);
    });
  }

  ngOnDestroy() {
    if ( this.scrollEvent$) this.scrollEvent$.unsubscribe();
  }
}
