import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from '../../shared/gallery-room/gallery-room.component';
import { ReflectionFontComponent } from '../../shared/reflection-font/reflection-font.component';
import { PlaygroundBottomMenuComponent } from '../playground-bottom-menu/playground-bottom-menu.component';

@Component({
  selector: 'app-fan-art',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, GalleryRoomComponent, RouterLink, PlaygroundBottomMenuComponent],
  templateUrl: './fan-art.component.html',
  styleUrl: './fan-art.component.scss'
})
export class FanArtComponent {
  fanart1 = [
    {
      picUrl: '/assets/images/playground/other-fanart/gojo_jujutsu_kaizen_rin_linin.webp',
      frameStyle: 'black-frame circle small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/miran_vtuber_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/my_melody_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/kuromi_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/hikari_pilpup_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/hawlucha_bae_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/little_mermaid_rin_linin.webp',
      frameStyle: 'black-frame small mini-frame-300',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: '',
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
  ];
  fanart2 = [

    {
      picUrl: '/assets/images/playground/other-fanart/rena_higurashi_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/sailor_moon_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/sakura_card_capture_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/uta_one_peice_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/wednesday_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/yoshida_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: '',
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
  ];
  fanart3 = [
    {
      picUrl: '/assets/images/playground/other-fanart/zzz_miyabi_half_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/gepard_star_rail_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/alan_star_rail_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/herta_star_rail_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: '',
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
  ];
  fanart4 = [
    {
      picUrl: '/assets/images/playground/other-fanart/corin_lycaon_zzz_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/layla_mobile_legend_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/miyabi_zzz_face_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: '',
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
  ];
  fanart5 = [

    {
      picUrl: '/assets/images/playground/other-fanart/anya_spy_family_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/yor_spy_family_rin_linin.webp',
      frameStyle: 'black-frame small mini-frame-400',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: '',
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
  ];
  fanart6 = [

    {
      picUrl: '/assets/images/playground/other-fanart/family_all_spy_family_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
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
      picUrl: '/assets/images/playground/other-fanart/loid_spy_family_rin_linin.webp',
      frameStyle: 'black-frame small mini-frame-400',
      content: {
        title: '',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: '',
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
  ];
}
