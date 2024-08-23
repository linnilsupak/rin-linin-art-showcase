import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReflectionFontComponent } from '../reflection-font/reflection-font.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, ReflectionFontComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
