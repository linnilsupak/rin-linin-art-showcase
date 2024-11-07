import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from '../../shared/gallery-room/gallery-room.component';
import { ReflectionFontComponent } from '../../shared/reflection-font/reflection-font.component';
import { PlaygroundBottomMenuComponent } from '../playground-bottom-menu/playground-bottom-menu.component';

@Component({
  selector: 'app-japan-trip-2023',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, GalleryRoomComponent, RouterLink, PlaygroundBottomMenuComponent],
  templateUrl: './japan-trip-2023.component.html',
  styleUrl: './japan-trip-2023.component.scss'
})
export class JapanTrip2023Component {
  japanTrip = [
    {
      picUrl: '/assets/images/playground/japan2023/team_lab_flower_rin_linin.webp',
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
    {
      picUrl: '/assets/images/playground/japan2023/team_lab_koi_rin_linin.webp',
      frameStyle: 'black-frame small',
      content: {
        title: 'Rin Linin: Sakura Koi room',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: 'I visit Team Lab at Japan and the sakura koi sea room kind of made me want to draw this picture.'
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
    {
      picUrl: '/assets/images/playground/japan2023/fuji_rin_linin.webp',
      frameStyle: 'white-frame small',
      content: {

        title: 'Fuji',
        title2: 'Design and draw by Rin Linin',
        subTitle: 'watercolor',
        description: 'I visit Mount. Fuji at Japan and I imagine that beautiful mountain as a woman in this picture.'
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
