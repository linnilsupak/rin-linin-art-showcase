import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { playgroundGalleryConfig } from '../core/config/playground.config';
import { GalleryRoomComponent } from "../shared/gallery-room/gallery-room.component";
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, GalleryRoomComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  readonly galleryRoomConfig = playgroundGalleryConfig;

}
