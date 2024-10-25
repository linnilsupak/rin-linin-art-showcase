import { Component } from '@angular/core';
import { playgroundGalleryConfig } from '../../core/config/playground.config';
import { GalleryRoomComponent } from '../../shared/gallery-room/gallery-room.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReflectionFontComponent } from '../../shared/reflection-font/reflection-font.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-art-fight-2024',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, GalleryRoomComponent, RouterLink],
  templateUrl: './art-fight-2024.component.html',
  styleUrl: './art-fight-2024.component.scss'
})
export class ArtFight2024Component {
  readonly galleryRoomConfig = playgroundGalleryConfig;

}
