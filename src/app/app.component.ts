import { isPlatformServer } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { filter, pairwise, startWith, switchMap, tap } from 'rxjs';
import { mainConfig } from './core/config/main.config';
import { ScrollPositionService } from './core/service/scroll-position.service';
import { WINDOW_PROVIDERS } from './core/service/window.service';
import { SetMainScrollPositionDirective } from './core/set-main-scroll-position.directive';
import { HeaderComponent } from './header/header.component';
import { ScrollUpButtonComponent } from "./scroll-up-button/scroll-up-button.component";
import { LoadingComponent } from "./shared/loading/loading.component";
import { StarrySkyComponent } from "./starry-sky/starry-sky.component";
import { TarotSearchStickyComponent } from "./shared/tarot-search-sticky/tarot-search-sticky.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, ScrollUpButtonComponent, TranslateModule, StarrySkyComponent, SetMainScrollPositionDirective, LoadingComponent, TarotSearchStickyComponent],
    providers: [WINDOW_PROVIDERS],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('content') scrollableDiv: ElementRef;
  private activatedRoute = inject(ActivatedRoute);

  minimizeFlag = true;
  isServer = false;
  scrollWidth = 0;
  showScrollUp = false;
  showSearchTarot = false;
  constructor(private router: Router, @Inject(PLATFORM_ID) platformId: Object,
    private scrollPositionService: ScrollPositionService) {
    this.isServer = isPlatformServer(platformId);
    if (this.isServer) return;
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      tap(() => this.scrollPositionService.setLoading(true)),
      startWith(null), // emitting first empty value to fill-in the buffer
      pairwise(),
      filter(([previousValue, currentValue]) => {
        const resetScrollZero = previousValue?.url?.split('?')[0] !== currentValue?.url?.split('?')[0];
        if (resetScrollZero) {
          this.scrollPositionService.setLoading(false);
          if (this.scrollableDiv) {
            this.scrollPositionService.setScrollHeight(Math.abs(this.scrollableDiv.nativeElement.scrollHeight - this.scrollableDiv.nativeElement.clientHeight));
            setTimeout(() => {
              this.scrollWidth = this.scrollableDiv.nativeElement.offsetWidth - this.scrollableDiv.nativeElement.scrollWidth;
            }, mainConfig.timeoutAfterInit);
          }
          if (this.scrollWidth < 0 ) this.scrollWidth = 0;
          this.resetFlagPosition();
        }
        return resetScrollZero;
      }),
      switchMap(() => {
        if (this.scrollableDiv) (this.scrollableDiv.nativeElement as HTMLDivElement).scrollTo(0, 0);
        return this.scrollPositionService.scrollPosition$.pipe(
          filter(p => p === 0),
        );
      })
    ).subscribe((p) => {
      this.scrollPositionService.setLoading(false);
    });
    this.scrollPositionService.scrollPosition$.subscribe(scrollPosition => {
      if (scrollPosition >= mainConfig.scrollPositionShowSearch) {
        this.showScrollUp = true;
        if (this.getShowTarotSearch()) this.showSearchTarot = true;
      } else {
        this.showScrollUp = false;
        this.showSearchTarot = false;
      }
      if (this.getMinimizeFlag()) {
        this.minimizeFlag = false;
      } else{
        this.minimizeFlag = (scrollPosition === 0);
      }
    });
  }

  getShowTarotSearch() {
    return this.activatedRoute.snapshot.firstChild?.data?.showTarotSearch;
  }

  getMinimizeFlag() {
    return this.activatedRoute.snapshot.firstChild?.data?.minimizeFlag;
  }

  resetFlagPosition() {
    if (this.getMinimizeFlag()) {
      this.minimizeFlag = false;
    } else {
      this.minimizeFlag = true;
    }
  }

  ngAfterViewInit(): void {
    if (this.isServer) return;
    setTimeout(() => {
      this.scrollPositionService.elementScrollPosition$.subscribe(({ value, option }) => {
        if (!option?.eventEmit) return;
        (this.scrollableDiv.nativeElement as HTMLDivElement).scrollTo({ top: value, behavior: 'smooth' });
        this.scrollPositionService.resetScrollToElementById();
        this.scrollPositionService.setLoading(false);
      });
    }, mainConfig.timeoutAfterInit);
  }

}
