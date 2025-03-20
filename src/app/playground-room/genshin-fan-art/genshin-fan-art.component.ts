import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from '../../shared/gallery-room/gallery-room.component';
import { ReflectionFontComponent } from '../../shared/reflection-font/reflection-font.component';
import { PlaygroundBottomMenuComponent } from '../playground-bottom-menu/playground-bottom-menu.component';

@Component({
    selector: 'app-genshin-fan-art',
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
        title: 'Keqing: Happy new year',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/layla_sleep_genshin_rin_linin.webp',
      frameStyle: 'white-frame small mini-frame-400',
      content: {
        title: 'Layla finally sleeping',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/navia_genshin_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {
        title: 'Navia',
        title2: 'Draw by Rin Linin',
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
    {
      picUrl: '/assets/images/playground/genshin/kokomi_genshin_rin_linin.webp',
      frameStyle: 'black-frame mini-frame-400',
      content: {
        title: 'Kokomi',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/lyney_lynette_genshin_rin_linin.webp',
      frameStyle: 'white-frame small mini-frame-500',
      content: {
        title: 'Lyney & Lynette',
        title2: 'Draw by Rin Linin',
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
    {
      picUrl: '/assets/images/playground/genshin/diluc_drink_genshin_rin_linin.webp',
      frameStyle: 'black-frame mini-frame-400',
      content: {
        title: 'Diluc bartender',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
  genshin2 = [

    {
      picUrl: '/assets/images/playground/genshin/mahou_shojou_klee_genshin_rin_linin.webp',
      frameStyle: 'black-frame small mini-frame-400 mt-auto',
      content: {
        title: 'Klee in mahou shoujo dress',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/kokomi_sea_genshin_rin_linin.webp',
      frameStyle: 'white-double-frame small',
      content: {
        title: 'Kokomi in the sea',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/yao_yao_genshin_rin_linin.webp',
      frameStyle: 'black-frame small mini-frame-400 mt-auto',
      content: {
        title: 'Yao yao',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
  genshin3 = [
    {
      picUrl: '/assets/images/playground/genshin/old_era_zhongli_genshin_rin_linin.webp',
      frameStyle: 'black-frame small mini-frame-400',
      content: {
        title: 'Zhonli old era',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/guizhong_genshin_rin_linin.webp',
      frameStyle: 'white-frame small mini-frame-400',
      content: {
        title: 'Guizhong in my imagination',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
  genshin4 = [
    {
      picUrl: '/assets/images/playground/genshin/ayato_milk_tea_genshin_rin_linin.webp',
      frameStyle: 'white-double-frame small',
      content: {
        title: 'Ayato with his milk tea',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/keaya_genshin_rin_linin.webp',
      frameStyle: 'white-double-frame small',
      content: {
        title: 'Keaya invitation',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/zhongli_drink_genshin_rin_linin.webp',
      frameStyle: 'white-double-frame small',
      content: {
        title: 'Zhongli make tea',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
  genshin5 = [
    {
      picUrl: '/assets/images/playground/genshin/wriothesley_genshin_rin_linin.webp',
      frameStyle: 'black-frame small circle mini-frame-200',
      content: {
        title: 'Wriothesley',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/chongyun_genshin_rin_linin.webp',
      frameStyle: 'white-frame small mini-frame-200',
      content: {
        title: 'Chongyun',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/neuvillette_genshin_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {
        title: 'Neuvillette',
        title2: 'Draw by Rin Linin',
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
    {
      picUrl: '/assets/images/playground/genshin/alhaitham_genshin_rin_linin.webp',
      frameStyle: 'black-frame mini-frame-500',
      content: {
        title: 'Alhaitham',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/nilou_genshin_rin_linin.webp',
      frameStyle: 'white-frame mini-frame-500',
      content: {
        title: 'Nilou',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/collei_genshin_rin_linin.webp',
      frameStyle: 'white-frame mini-frame-500',
      content: {
        title: 'Collei',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/tighnari_genshin_rin_linin.webp',
      frameStyle: 'black-frame small mini-frame-500',
      content: {
        title: 'Tighnari',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
  genshin6 = [
    {
      picUrl: '/assets/images/playground/genshin/ganyu_chinese_genshin_rin_linin.webp',
      frameStyle: 'black-frame small mini-frame-300 mt-auto',
      content: {
        title: 'Ganyu',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/keqing_meow_genshin_rin_linin.webp',
      frameStyle: 'black-frame small mini-frame-300 mt-auto',
      content: {
        title: 'Keqing meow meow',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/hutao_playful_genshin_rin_linin.webp',
      frameStyle: 'black-frame small mini-frame-300 mt-auto',
      content: {
        title: 'Hutao',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/klee_hbd_genshin_rin_linin.webp',
      frameStyle: 'black-frame small mini-frame-300 mt-auto',
      content: {
        title: 'Klee',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
  genshin7 = [
    {
      picUrl: '/assets/images/playground/genshin/ei_icecream_genshin_rin_linin.webp',
      frameStyle: 'white-frame small mini-frame-500 mt-auto',
      content: {
        title: 'Ei eating icecream',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/yae_genshin_rin_linin.webp',
      frameStyle: 'white-frame small mini-frame-500 mt-auto',
      content: {
        title: 'Yae in the cafe',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
  genshin8 = [
    {
      picUrl: '/assets/images/playground/genshin/fishcl_genshin_rin_linin.webp',
      frameStyle: 'black-frame circle small mini-frame-200',
      content: {
        title: 'Fischl',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/magic_ayato_genshin_rin_linin.webp',
      frameStyle: 'black-frame mini-frame-400 small',
      content: {
        title: 'Ayato with magic suit',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/furina_genshin_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: 'Furina',
        title2: 'Draw by Rin Linin',
        subTitle: 'color pencil',
        description: '',
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
    {
      picUrl: '/assets/images/playground/genshin/alhaitham_doc_genshin_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/ningguang_genshin_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {
        title: 'Ningguang',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/yoimiya_genshin_rin_linin.webp',
      frameStyle: 'black-frame mini-frame-500 small',
      content: {
        title: 'Yoimiya',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/nahida_genshin_rin_linin.webp',
      frameStyle: 'black-frame mini-frame-500 small',
      content: {
        title: 'Nahida',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
  genshin9 = [
    {
      picUrl: '/assets/images/playground/genshin/lisa_genshin_rin_linin.webp',
      frameStyle: 'black-frame mini-frame-400 small',
      content: {
        title: 'Lisa',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/ayaka_genshin_rin_linin.webp',
      frameStyle: 'black-frame mini-frame-400 small',
      content: {
        title: 'Ayaka',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/xingque_genshin_rin_linin.webp',
      frameStyle: 'black-frame mini-frame-400 small',
      content: {
        title: 'Xingque',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
  genshin10 = [
    {
      picUrl: '/assets/images/playground/genshin/babara_genshin_rin_linin.webp',
      frameStyle: 'white-frame mini-frame-500 small',
      content: {
        title: 'Babara singing in the concert',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
      picUrl: '/assets/images/playground/genshin/alhaitham_concert_genshin_rin_linin.webp',
      frameStyle: 'white-frame mini-frame-500 small',
      content: {
        title: 'Alhaitham in the concert',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
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
}
