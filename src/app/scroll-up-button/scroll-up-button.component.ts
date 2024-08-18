import { Component, Inject } from '@angular/core';
import { WINDOW, WINDOW_PROVIDERS } from '../core/service/window.service';

@Component({
  selector: 'app-scroll-up-button',
  standalone: true,
  imports: [],
  providers: [WINDOW_PROVIDERS],
  templateUrl: './scroll-up-button.component.html',
  styleUrl: './scroll-up-button.component.scss'
})
export class ScrollUpButtonComponent {

  constructor(@Inject(WINDOW) private window: Window,) {
  }

  scrollToTop() {
    this.window.scrollTo(0, 0);
  }

}
