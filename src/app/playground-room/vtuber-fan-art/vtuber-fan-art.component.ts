import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from '../../shared/gallery-room/gallery-room.component';
import { ReflectionFontComponent } from '../../shared/reflection-font/reflection-font.component';
import { PlaygroundBottomMenuComponent } from '../playground-bottom-menu/playground-bottom-menu.component';

@Component({
    selector: 'app-vtuber-fan-art',
    imports: [ReflectionFontComponent, TranslateModule, GalleryRoomComponent, RouterLink, PlaygroundBottomMenuComponent],
    templateUrl: './vtuber-fan-art.component.html',
    styleUrl: './vtuber-fan-art.component.scss'
})
export class VtuberFanArtComponent {
  vtuber1 = [
    {
      picUrl: '/assets/images/playground/vtuber/dacopo_vtuber_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {
        title: 'Dacapo: Orion',
        title2: 'Draw by Rin Linin',
        subTitle: 'watercolor',
        description: 'I just stumble apon Orion MV and I find their design is so cool and Dacapo in the MV look so shota so I kind of draw him.'
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
    {
      picUrl: '/assets/images/playground/vtuber/schneider_vtuber_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {
        title: 'Schneider-Orion: Fan art',
        title2: 'by Rin Linin',
        subTitle: 'watercolor',
        description: 'Since I already draw baabel and dacapo from Orion, so I also draw Schneider from the same project too. This time I draw the fanart on A3 with more detail.',
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
    {
      picUrl: '/assets/images/playground/vtuber/baabel_vtuber_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {
        title: 'Baabel: orion',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: 'When I watch Dacapo debut, he didn\'t look that shota though but Baabel look more shota than him so I kind of draw him next. Ha ha'
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
  ];
  vtuber2 = [
    {
      picUrl: '/assets/images/playground/vtuber/melody_vtuber_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {
        title: 'Mycara Melony',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: 'I like her singing voice ha ha and I really like the sound of her piano.'
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
