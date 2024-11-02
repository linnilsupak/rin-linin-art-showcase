import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from '../../shared/gallery-room/gallery-room.component';
import { ReflectionFontComponent } from '../../shared/reflection-font/reflection-font.component';
import { PlaygroundBottomMenuComponent } from '../playground-bottom-menu/playground-bottom-menu.component';

@Component({
  selector: 'app-vocaloid-fan-art',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, GalleryRoomComponent, RouterLink, PlaygroundBottomMenuComponent],
  templateUrl: './vocaloid-fan-art.component.html',
  styleUrl: './vocaloid-fan-art.component.scss'
})
export class VocaloidFanArtComponent {
  vocaloid = [
    {
      picUrl: '/assets/images/playground/vocaloid/sakura_miku_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: '',
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
    {
      picUrl: '/assets/images/playground/vocaloid/snow_miku_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: '',
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
    {
      picUrl: '/assets/images/playground/vocaloid/bridal_miku_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: '',
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },

  ]

}
