import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from '../../shared/gallery-room/gallery-room.component';
import { ReflectionFontComponent } from '../../shared/reflection-font/reflection-font.component';
import { PlaygroundBottomMenuComponent } from '../playground-bottom-menu/playground-bottom-menu.component';

@Component({
    selector: 'app-etc',
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
        title: 'Remake my old watercolor art',
        title2: 'by Rin Linin',
        subTitle: 'watercolor',
        description: 'I just discover my old art when I draw when I was a high school. And I redraw them into this peice.',
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
        title: 'Uzbekistan Girl',
        title2: 'by Rin Linin',
        subTitle: 'watercolor',
        description: 'I want to try drawing random country challenge. And the result of country random is Uzbekistan, I have never heard of them before but I did my research before drawing this picture!',
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
        title: 'Novel cover request: Female Knight',
        title2: 'by Rin Linin',
        subTitle: 'watercolor',
        description: 'One time, I want to try drawing Novel cover, so I open a request on Dek-D and I draw this cover for the novelist!',
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
        title: 'Tobias\'s eye',
        title2: 'by Rin Linin',
        subTitle: 'watercolor',
        description: 'My old design of My OC',
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
        title: 'Fiona\'s eye',
        title2: 'by Rin Linin',
        subTitle: 'watercolor',
        description: 'My old design of My OC',
      },
      isRecTemplate: true,
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
        title: 'Happy bun DTIYS',
        title2: 'by Rin Linin',
        subTitle: 'watercolor',
        description: 'I see DTIYS from Happy bun, I did\'t known what DTIYS at athat time and it look fun so I participace. P.S.DTIYS is Do this in your style',
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
        title: 'Preist JRPG',
        title2: 'by Rin Linin',
        subTitle: 'watercolor',
        description: 'I just randomly draw some JRPG job role.',
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
        title: 'My gift',
        title2: 'by Rin Linin',
        subTitle: 'watercolor',
        description: 'This drawing is a gift to someone who like pokemon.',
      },
      isRecTemplate: true,
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
        title: 'Rabbit year',
        title2: 'by Rin Linin',
        subTitle: 'watercolor',
        description: 'On a rabbit new year, I draw this picture.',
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
        title: 'Persona of INFP',
        title2: 'by Rin Linin',
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
      picUrl: '/assets/images/playground/etc/chinese_novel_rin_linin.webp',
      frameStyle: 'black-frame',
      content: {
        title: 'Chinese novel cover request',
        title2: 'by Rin Linin',
        subTitle: 'watercolor',
        description: 'I just want to try drawing novel cover and open request on Dek-D. This is one of my results.',
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
        title: 'Marry in Secret Garden',
        title2: 'by Rin Linin',
        subTitle: 'watercolor',
        description: 'For a past-time book sudject, I like this book the mose and I revisit those memory by drawing Marry the protagonist of that book.',
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },

  ];

}
