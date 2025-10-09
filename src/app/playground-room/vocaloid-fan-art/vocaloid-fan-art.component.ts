import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from '../../shared/gallery-room/gallery-room.component';
import { ReflectionFontComponent } from '../../shared/reflection-font/reflection-font.component';
import { PlaygroundBottomMenuComponent } from '../playground-bottom-menu/playground-bottom-menu.component';

@Component({
    selector: 'app-vocaloid-fan-art',
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
        title: 'Sakura Miku',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
        description: 'I like miku various dress design so I draw many of them. Sakura Miku is one of them.',
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
        title: 'Snow miku',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
        description: 'I like snow miku design. It feel like it\'s snow on a new year!',
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
        title: 'Bridal Miku',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
        description: 'Ha ha this is my version of Miku design. I just feel like to draw Miku in bridal dress.',
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },

  ]

}
