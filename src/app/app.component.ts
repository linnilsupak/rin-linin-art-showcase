import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ScrollUpButtonComponent } from "./scroll-up-button/scroll-up-button.component";
import { StarrySkyComponent } from "./starry-sky/starry-sky.component";
import { SetMainScrollPositionDirective } from './core/set-main-scroll-position.directive';
import { WINDOW_PROVIDERS } from './core/service/window.service';
import { combineLatest, filter } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { ScrollPositionService } from './core/service/scroll-position.service';

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
  isServer = false;
  constructor(private router: Router, @Inject(PLATFORM_ID) platformId: Object,
  private scrollPositionService: ScrollPositionService) {
    this.isServer = isPlatformServer(platformId);
    if (this.isServer) return;
    combineLatest([
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)),
      this.scrollPositionService.elementScrollPosition$
    ]).subscribe(([n, elementScrollPosition]) => {
      if (!elementScrollPosition) {
        (this.scrollableDiv.nativeElement as HTMLDivElement).scrollTo(0, 0);
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.isServer) return;
    this.scrollPositionService.elementScrollPosition$.subscribe((y) => {
      (this.scrollableDiv.nativeElement as HTMLDivElement).scrollTo({ top: y, behavior: 'smooth' });
    });
  }

}
