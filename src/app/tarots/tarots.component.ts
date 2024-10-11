import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReflectionFontComponent } from '../shared/reflection-font/reflection-font.component';
import { tarotConfig } from '../core/config/tarot.config';

@Component({
  selector: 'app-tarots',
  standalone: true,
  imports: [TranslateModule, ReflectionFontComponent],
  templateUrl: './tarots.component.html',
  styleUrl: './tarots.component.scss'
})
export class TarotsComponent {
  readonly tarotConfig = tarotConfig;

}
