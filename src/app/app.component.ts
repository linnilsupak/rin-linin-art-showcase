import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ScrollUpButtonComponent } from "./scroll-up-button/scroll-up-button.component";
import { StarrySkyComponent } from "./starry-sky/starry-sky.component";
import { SetMainScrollPositionDirective } from './core/set-main-scroll-position.directive';
import { WINDOW_PROVIDERS } from './core/service/window.service';
import { filter } from 'rxjs';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ScrollUpButtonComponent, StarrySkyComponent, SetMainScrollPositionDirective],
  providers: [WINDOW_PROVIDERS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('content') scrollableDiv: ElementRef;
  constructor(private router: Router, @Inject(PLATFORM_ID) platformId: Object) {
    if (isPlatformServer(platformId)) return;
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      (this.scrollableDiv.nativeElement as HTMLDivElement).scrollTo(0, 0);
    });
  }

}
