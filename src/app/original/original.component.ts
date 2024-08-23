import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReflectionFontComponent } from '../reflection-font/reflection-font.component';

@Component({
  selector: 'app-original',
  standalone: true,
  imports: [TranslateModule, ReflectionFontComponent],
  templateUrl: './original.component.html',
  styleUrl: './original.component.scss',
})
export class OriginalComponent { }
