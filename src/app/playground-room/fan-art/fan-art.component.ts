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
        title: 'Gojo: Jujutsu Kaizen',
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
      picUrl: '/assets/images/playground/other-fanart/miran_vtuber_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {
        title: 'Miran Virtual Singer',
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
      picUrl: '/assets/images/playground/other-fanart/my_melody_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: 'Sanrio My Melody',
        title2: 'Draw by Rin Linin',
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
        title: 'Sanrio Kuromi as cute girl',
        title2: 'Draw by Rin Linin',
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
        title: 'Pokemon: Hikari & pilpup',
        title2: 'Draw by Rin Linin',
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
        title: 'Pokemon: Bae & Hawlucha',
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
      picUrl: '/assets/images/playground/other-fanart/little_mermaid_rin_linin.webp',
      frameStyle: 'black-frame small mini-frame-300',
      content: {
        title: 'Little Mermaid old design',
        title2: 'Draw by Rin Linin',
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
        title: 'Rena from Higurashi',
        title2: 'Draw by Rin Linin',
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
        title: 'Sailor moon: Usagi',
        title2: 'Draw by Rin Linin',
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
        title: 'Sakura Card Capture: Sakura',
        title2: 'Draw by Rin Linin',
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
        title: 'Uta from One peice',
        title2: 'Draw by Rin Linin',
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
        title: 'Wednesday Fanart',
        title2: 'Draw by Rin Linin',
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
        title: 'Yoshida from chainsaw man',
        title2: 'Draw by Rin Linin',
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
        title: 'Miyabi from ZZZ',
        title2: 'Draw by Rin Linin',
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
        title: 'Gepard from Honkai Star rail',
        title2: 'Draw by Rin Linin',
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
        title: 'Alan  from Honkai Star rail',
        title2: 'Draw by Rin Linin',
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
        title: 'Herta from Honkai Star rail',
        title2: 'Draw by Rin Linin',
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
        title: 'Corin & Lycaon from ZZZ',
        title2: 'Draw by Rin Linin',
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
        title: 'Layla from Mobile Legend',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
        description: 'Someone on youtube comment request me.',
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
        title: 'Miyabi from ZZZ',
        title2: 'Draw by Rin Linin',
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
        title: 'Anya from Spy X Family',
        title2: 'Draw by Rin Linin',
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
        title: 'Yor from Spy X Family',
        title2: 'Draw by Rin Linin',
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
        title: 'All family membersfrom Spy X Family',
        title2: 'Draw by Rin Linin',
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
        title: 'Loid from Spy X Family',
        title2: 'Draw by Rin Linin',
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
