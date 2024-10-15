import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from "../../shared/gallery-room/gallery-room.component";

@Component({
  selector: 'app-francois-info',
  standalone: true,
  imports: [TranslateModule, GalleryRoomComponent],
  templateUrl: './francois-info.component.html',
  styleUrl: './francois-info.component.scss'
})
export class FrancoisInfoComponent {
  francoisMyArt = [
    {
      picUrl: '/assets/images/original/francois/Francois_design_rin_linin.png',
      frameStyle: 'black-frame',
      content: {
        title: 'Francois',
        title2: 'Original design by Rin Linin',
        subTitle: 'pencil',
        description: ''
      },
      previewPic: {
        width: '230px',
        height: '164px',
        disabled: true
      }
    },
    {
      picUrl: '/assets/images/original/francois/Francois_color_ori_rin_linin.png',
      frameStyle: 'black-frame',
      content: {
        title: 'Francois',
        title2: 'Original design by Rin Linin',
        subTitle: 'color pencil',
        description: ''
      },
      previewPic: {
        width: '230px',
        height: '360px',
        disabled: true
      }
    }
  ];
}
