import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { playgroundGalleryConfig } from '../core/config/playground.config';
import { GalleryRoomComponent } from "../shared/gallery-room/gallery-room.component";
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";
import { ImageCardComponent } from "../shared/image-card/image-card.component";
import { CharacterIconComponent } from "../shared/character-icon/character-icon.component";
import { PlaygroundMenuComponent } from "./playground-menu/playground-menu.component";

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, GalleryRoomComponent, ImageCardComponent, CharacterIconComponent, PlaygroundMenuComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  readonly galleryRoomConfig = playgroundGalleryConfig;

}
