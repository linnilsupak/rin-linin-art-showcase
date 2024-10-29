import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from '../../shared/gallery-room/gallery-room.component';
import { ReflectionFontComponent } from '../../shared/reflection-font/reflection-font.component';
import { PlaygroundBottomMenuComponent } from '../playground-bottom-menu/playground-bottom-menu.component';

@Component({
  selector: 'app-sweet-art',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, GalleryRoomComponent, RouterLink, PlaygroundBottomMenuComponent],
  templateUrl: './sweet-art.component.html',
  styleUrl: './sweet-art.component.scss'
})
export class SweetArtComponent {
  sweet1 = [
    {
      picUrl: '/assets/images/playground/sweet-art/strwberry-rin-linin.webp',
      frameStyle: 'white-frame',
      content: {
        title: 'Rin Linin: Flower room',
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
  sweet2 = [
    {
      picUrl: '/assets/images/playground/sweet-art/chocolate-lava-rin-linin.webp',
      frameStyle: 'white-frame',
      content: {
        title: 'Rin Linin: Flower room',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: 'I visit Team Lab at Japan and the flower room kind of made me want to draw this picture.'
      },
      isRecTemplate: true,
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
    {
      picUrl: '/assets/images/playground/sweet-art/ice-cream-rin-linin.webp',
      frameStyle: 'white-frame',
      content: {
        title: 'Rin Linin: Flower room',
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
  sweet3 = [
    {
      picUrl: '/assets/images/playground/sweet-art/green-tea-bubble-rin-linin.webp',
      frameStyle: 'white-frame',
      content: {
        title: 'Rin Linin: Flower room',
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
