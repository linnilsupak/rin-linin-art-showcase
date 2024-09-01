import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ScrollUpButtonComponent } from "./scroll-up-button/scroll-up-button.component";
import { StarrySkyComponent } from "./starry-sky/starry-sky.component";
import { SetMainScrollPositionDirective } from './core/set-main-scroll-position.directive';
import { WINDOW_PROVIDERS } from './core/service/window.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ScrollUpButtonComponent, StarrySkyComponent, SetMainScrollPositionDirective],
  providers: [WINDOW_PROVIDERS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor() {
  }

}
