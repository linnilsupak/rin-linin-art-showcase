import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReflectionFontComponent } from '../shared/reflection-font/reflection-font.component';
import { CharacterIconComponent } from "../shared/character-icon/character-icon.component";

@Component({
  selector: 'app-original',
  standalone: true,
  imports: [TranslateModule, ReflectionFontComponent, CharacterIconComponent],
  templateUrl: './original.component.html',
  styleUrl: './original.component.scss',
})
export class OriginalComponent { }
