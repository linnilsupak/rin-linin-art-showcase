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
        title: 'Strawberry as cute girl',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: 'I just want to draw dessert as cute girl and go to after you to get inspiration. And here one of the elements in the menu "Chocolate Lava" the strawberry! on that plate. It\'s delicious~'
      },
      isRecTemplate: true,
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
        title: 'Chocolate Lava as cute girl',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: 'One of the elements in the menu "Chocolate Lava", Choco-chan!'
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
        title: 'Ice-cream as cute girl',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: 'One of the elements in the menu "Chocolate Lava", Ice-cream~'
      },
      isRecTemplate: true,
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
        title: 'Green tea with bubble as cute girl',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'color pencil',
        description: 'After dessert, you must go to sweet tea and I choose green team top with bubble!'
      },
      isRecTemplate: true,
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
  ]
}
