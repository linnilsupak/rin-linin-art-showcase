import { Component } from '@angular/core';
import { artFight2024GalleryConfig } from '../../core/config/playground/artfight-2024.config';
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
  readonly galleryRoomConfig = artFight2024GalleryConfig;

}
