import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from '../../shared/gallery-room/gallery-room.component';
import { ReflectionFontComponent } from '../../shared/reflection-font/reflection-font.component';
import { PlaygroundBottomMenuComponent } from '../playground-bottom-menu/playground-bottom-menu.component';

@Component({
  selector: 'app-vtuber-fan-art',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, GalleryRoomComponent, RouterLink, PlaygroundBottomMenuComponent],
  templateUrl: './vtuber-fan-art.component.html',
  styleUrl: './vtuber-fan-art.component.scss'
})
export class VtuberFanArtComponent {
  vtuber1 = [
    {
      picUrl: '/assets/images/playground/vtuber/dacopo_vtuber_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: 'I visit Team Lab at Japan and the flower room kind of made me want to draw this picture.'
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
    {
      picUrl: '/assets/images/playground/vtuber/baabel_vtuber_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: 'I visit Team Lab at Japan and the flower room kind of made me want to draw this picture.'
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
  ];
  vtuber2 = [
    {
      picUrl: '/assets/images/playground/vtuber/melody_vtuber_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: 'I visit Team Lab at Japan and the flower room kind of made me want to draw this picture.'
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
  ]

}
