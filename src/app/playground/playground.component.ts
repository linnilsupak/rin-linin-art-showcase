import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { playgroundMenuConfig } from '../core/config/playground/playground-menu.config';
import { CharacterIconComponent } from "../shared/character-icon/character-icon.component";
import { ImageCardComponent } from "../shared/image-card/image-card.component";
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";
import { PlaygroundMenuComponent } from "./playground-menu/playground-menu.component";

@Component({
    selector: 'app-playground',
    imports: [ReflectionFontComponent, TranslateModule, ImageCardComponent, CharacterIconComponent, PlaygroundMenuComponent, RouterLink],
    templateUrl: './playground.component.html',
    styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  readonly playgroundMenuConfig = playgroundMenuConfig;


}
