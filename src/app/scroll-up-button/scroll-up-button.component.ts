import { AfterViewInit, Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { WINDOW_PROVIDERS } from '../core/service/window.service';
import { CommonModule, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-scroll-up-button',
  standalone: true,
  imports: [CommonModule],
  providers: [WINDOW_PROVIDERS],
  templateUrl: './scroll-up-button.component.html',
  styleUrl: './scroll-up-button.component.scss'
})
export class ScrollUpButtonComponent implements AfterViewInit {
  @Input({ required: true }) scrollableDiv: HTMLDivElement;
  isServer: boolean;
  scrollWidth = 0;
  loading = true;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isServer = isPlatformServer(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isServer) return;
    if (this.scrollableDiv) this.scrollWidth = this.scrollableDiv.offsetWidth - this.scrollableDiv.scrollWidth;
    if (this.scrollWidth < 0 ) this.scrollWidth = 0;
    setTimeout(() => {
      this.loading = false;
    }, 0);
  }

  scrollToTop() {
    this.scrollableDiv.scrollTo(0, 0);
  }

}
