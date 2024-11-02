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
      picUrl: '/assets/images/playground/art-trade/rin_linin_sketch_by_cookie_chocoladka.webp?v=1',
      frameStyle: 'black-frame small mini-frame-500',
      content: {
        title: 'Rin Linin sketch by Cookie Chocoladka',
        title2: 'Draw by Cookie Chocoladka',
        subTitle: 'pencil',
        description: 'A part of art collaboratoin by Cookie Chcoladka and Rin Linin. Sometimes you will find a passing art friend on internet, don\'t forget to ask them to do an Art collab with you!',
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
        title: 'Rin Linin Collab',
        title2: 'Color by Rin Linin',
        subTitle: 'color pencil',
        description: '',
      },
      isRecTemplate: true,
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
        title: 'Alice Collab by Rin Linin',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'Sketch',
        description: '',
      },
      isRecTemplate: true,
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
        title: 'Alice Collab color by IamLittleNeko',
        title2: 'Color by IamLittleNeko',
        subTitle: 'Marker',
        description: 'Well, when you see an art friend of an art friend, you will want to ask them to do a collab with you too!! and this is a result of that moment urge of mind. Ha ha~',
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },

  ];

}
