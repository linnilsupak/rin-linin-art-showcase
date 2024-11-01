import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from '../../shared/gallery-room/gallery-room.component';
import { ReflectionFontComponent } from '../../shared/reflection-font/reflection-font.component';
import { PlaygroundBottomMenuComponent } from '../playground-bottom-menu/playground-bottom-menu.component';

@Component({
  selector: 'app-etc',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, GalleryRoomComponent, RouterLink, PlaygroundBottomMenuComponent],
  templateUrl: './etc.component.html',
  styleUrl: './etc.component.scss'
})
export class EtcComponent {
  etc1 = [
    {
      picUrl: '/assets/images/playground/etc/remade_2024_rin_linin.webp',
      frameStyle: 'black-frame',
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
      picUrl: '/assets/images/playground/etc/uzbekistan_rin_linin.webp',
      frameStyle: 'black-frame',
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
      picUrl: '/assets/images/playground/etc/novel_cover_knight_rin_linin.webp',
      frameStyle: 'black-frame',
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
  etc2 = [
    {
      picUrl: '/assets/images/playground/etc/tobias_rin_linin.webp',
      frameStyle: 'black-frame circle small',
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
      picUrl: '/assets/images/playground/etc/fiona_first_draft_rin_linin.webp',
      frameStyle: 'white-frame circle small',
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
      picUrl: '/assets/images/playground/etc/happy_bun_pizza_rin_linin.webp',
      frameStyle: 'black-frame',
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
      picUrl: '/assets/images/playground/etc/preist_jrpg_rin_linin.webp',
      frameStyle: 'black-frame',
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
      picUrl: '/assets/images/playground/etc/2023_gift_rin_linin.webp',
      frameStyle: 'white-frame mini-frame-500',
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
      picUrl: '/assets/images/playground/etc/rabbit_year_rin_linin.webp',
      frameStyle: 'black-frame mb-auto circle small',
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
  etc3 = [
    {
      picUrl: '/assets/images/playground/etc/infp_rin_linin.webp',
      frameStyle: 'black-frame',
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
      picUrl: '/assets/images/playground/etc/chinese_novel_rin_linin.webp',
      frameStyle: 'black-frame',
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
      picUrl: '/assets/images/playground/etc/secret_garden_rin_linin.webp',
      frameStyle: 'black-frame',
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
