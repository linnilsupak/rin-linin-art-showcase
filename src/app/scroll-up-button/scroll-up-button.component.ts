import { Component, Input } from '@angular/core';
import { WINDOW_PROVIDERS } from '../core/service/window.service';

@Component({
  selector: 'app-scroll-up-button',
  standalone: true,
  imports: [],
  providers: [WINDOW_PROVIDERS],
  templateUrl: './scroll-up-button.component.html',
  styleUrl: './scroll-up-button.component.scss'
})
export class ScrollUpButtonComponent {
  @Input({ required: true }) scrollableDiv: HTMLDivElement;

  constructor() {
  }

  scrollToTop() {
    this.scrollableDiv.scrollTo(0, 0);
  }

}
