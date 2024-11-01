import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from '../../shared/gallery-room/gallery-room.component';
import { ReflectionFontComponent } from '../../shared/reflection-font/reflection-font.component';
import { PlaygroundBottomMenuComponent } from '../playground-bottom-menu/playground-bottom-menu.component';

@Component({
  selector: 'app-art-trade',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, GalleryRoomComponent, RouterLink, PlaygroundBottomMenuComponent],
  templateUrl: './art-trade.component.html',
  styleUrl: './art-trade.component.scss'
})
export class ArtTradeComponent {
  artTrade1 = [
    {
      picUrl: '/assets/images/playground/art-trade/rin_linin_sketch_by_cookie_chocoladka.webp',
      frameStyle: 'black-frame small mini-frame-500',
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
    {
      picUrl: '/assets/images/playground/art-trade/rin_linin_color_by_rin_linin.webp',
      frameStyle: 'white-frame small mini-frame-500',
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
  artTrade2 = [
    {
      picUrl: '/assets/images/playground/art-trade/alice_sketch_by_rin_linin.webp',
      frameStyle: 'white-frame small',
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
    {
      picUrl: '/assets/images/playground/art-trade/collab_with_rin_linin_by_iamalittleneko.webp',
      frameStyle: 'black-frame small',
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

}
