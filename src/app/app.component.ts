import { isPlatformServer } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, pairwise, startWith, switchMap, tap } from 'rxjs';
import { mainConfig } from './core/config/main.config';
import { ScrollPositionService } from './core/service/scroll-position.service';
import { WINDOW_PROVIDERS } from './core/service/window.service';
import { SetMainScrollPositionDirective } from './core/set-main-scroll-position.directive';
import { HeaderComponent } from './header/header.component';
import { ScrollUpButtonComponent } from "./scroll-up-button/scroll-up-button.component";
import { StarrySkyComponent } from "./starry-sky/starry-sky.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ScrollUpButtonComponent, StarrySkyComponent, SetMainScrollPositionDirective],
  providers: [WINDOW_PROVIDERS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('content') scrollableDiv: ElementRef;

  topOfThePage = true;
  isServer = false;
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
        const resetScrollZero = previousValue?.url?.split('#')[0] !== currentValue?.url?.split('#')[0];
        if (resetScrollZero) this.scrollPositionService.setLoading(false);
        return resetScrollZero;
      }),
      switchMap(() => {
        (this.scrollableDiv.nativeElement as HTMLDivElement).scrollTo(0, 0);
        return this.scrollPositionService.scrollPosition$.pipe(
          filter(p => p === 0)
        );
      })
    ).subscribe((p) => {
      this.scrollPositionService.setLoading(false);
    });
    this.scrollPositionService.scrollPosition$.subscribe(scrollTop => {
      this.topOfThePage = (scrollTop === 0);
    })
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
