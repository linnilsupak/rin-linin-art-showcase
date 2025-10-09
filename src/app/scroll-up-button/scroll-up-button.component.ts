import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { WINDOW_PROVIDERS } from '../core/service/window.service';

@Component({
    selector: 'app-scroll-up-button',
    imports: [CommonModule],
    providers: [WINDOW_PROVIDERS],
    templateUrl: './scroll-up-button.component.html',
    styleUrl: './scroll-up-button.component.scss'
})
export class ScrollUpButtonComponent implements AfterViewInit {
  @Input({ required: true }) scrollableDiv: HTMLDivElement;
  @Input() scrollWidth = 0;
  @Input()
  set hideButton(val: boolean) {
    this._hideButton = val;
  }
  get hideButton() {
    return this._hideButton;
  }
  private _hideButton = false;
  constructor() {
  }

  ngAfterViewInit(): void {
  }

  scrollToTop() {
    this.scrollableDiv.scrollTo(0, 0);
  }

}
