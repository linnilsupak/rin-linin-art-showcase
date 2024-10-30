import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from '../../shared/gallery-room/gallery-room.component';
import { ReflectionFontComponent } from '../../shared/reflection-font/reflection-font.component';
import { PlaygroundBottomMenuComponent } from '../playground-bottom-menu/playground-bottom-menu.component';

@Component({
  selector: 'app-genshin-fan-art',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, GalleryRoomComponent, RouterLink, PlaygroundBottomMenuComponent],
  templateUrl: './genshin-fan-art.component.html',
  styleUrl: './genshin-fan-art.component.scss'
})
export class GenshinFanArtComponent {
  genshin1 = [
    {
      picUrl: '/assets/images/playground/genshin/keqing_new_year_genshin_rin_linin.webp',
      frameStyle: 'black-frame small mini-frame-400',
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
      picUrl: '/assets/images/playground/genshin/layla_sleep_genshin_rin_linin.webp',
      frameStyle: 'white-frame small mini-frame-400',
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
      picUrl: '/assets/images/playground/genshin/navia_genshin_rin_linin.webp',
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
      picUrl: '/assets/images/playground/genshin/kokomi_genshin_rin_linin.webp',
      frameStyle: 'black-frame mini-frame-400',
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
      picUrl: '/assets/images/playground/genshin/lyney_lynette_genshin_rin_linin.webp',
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
    {
      picUrl: '/assets/images/playground/genshin/diluc_drink_genshin_rin_linin.webp',
      frameStyle: 'black-frame mini-frame-400',
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
  genshin2 = [

    {
      picUrl: '/assets/images/playground/genshin/mahou_shojou_klee_genshin_rin_linin.webp',
      frameStyle: 'black-frame small mini-frame-400 mt-auto',
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
      picUrl: '/assets/images/playground/genshin/kokomi_sea_genshin_rin_linin.webp',
      frameStyle: 'white-double-frame small',
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
      picUrl: '/assets/images/playground/genshin/yao_yao_genshin_rin_linin.webp',
      frameStyle: 'black-frame small mini-frame-400 mt-auto',
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
  genshin3 = [
    {
      picUrl: '/assets/images/playground/genshin/old_era_zhongli_genshin_rin_linin.webp',
      frameStyle: 'black-frame small mini-frame-400',
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
      picUrl: '/assets/images/playground/genshin/guizhong_genshin_rin_linin.webp',
      frameStyle: 'white-frame small mini-frame-400',
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
  genshin4 = [
    {
      picUrl: '/assets/images/playground/genshin/ayato_milk_tea_genshin_rin_linin.webp',
      frameStyle: 'white-double-frame small',
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
      picUrl: '/assets/images/playground/genshin/keaya_genshin_rin_linin.webp',
      frameStyle: 'white-double-frame small',
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
      picUrl: '/assets/images/playground/genshin/zhongli_drink_genshin_rin_linin.webp',
      frameStyle: 'white-double-frame small',
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
  genshin5 = [
    {
      picUrl: '/assets/images/playground/genshin/wriothesley_genshin_rin_linin.webp',
      frameStyle: 'black-frame small circle',
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
      picUrl: '/assets/images/playground/genshin/chongyun_genshin_rin_linin.webp',
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
      picUrl: '/assets/images/playground/genshin/neuvillette_genshin_rin_linin.webp',
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
      picUrl: '/assets/images/playground/genshin/alhaitham_genshin_rin_linin.webp',
      frameStyle: 'black-frame mini-frame-500',
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
      picUrl: '/assets/images/playground/genshin/collei_genshin_rin_linin.webp',
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
      picUrl: '/assets/images/playground/genshin/tighnari_genshin_rin_linin.webp',
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
  ];
}
