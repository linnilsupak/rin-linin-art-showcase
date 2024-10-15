import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReflectionFontComponent } from '../shared/reflection-font/reflection-font.component';
import { ImageCardComponent } from "../shared/image-card/image-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, ReflectionFontComponent, ImageCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
