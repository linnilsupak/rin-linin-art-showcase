import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { openArtWorkLabel } from '../../core/utilities/open-art-work-label.util';
import { GalleryRoomComponent } from "../../shared/gallery-room/gallery-room.component";

@Component({
  selector: 'app-mimi-info',
  standalone: true,
  imports: [TranslateModule, GalleryRoomComponent],
  templateUrl: './mimi-info.component.html',
  styleUrl: './mimi-info.component.scss'
})
export class MimiInfoComponent {
  private matDialog = inject(MatDialog);
  mimiMyart = [{
    picUrl: '/assets/images/original/mimi/mimi_ori_rin_linin.png?v=10',
    frameStyle: 'black-frame',
    content: {
      title: 'Mimi',
      title2: 'Original design by Rin Linin',
      subTitle: 'color pencil',
      description: ''
    },
    previewPic: {
      width: '271px',
      height: '240px',
      disabled: true
    }
  }];
  mimiFanart = [
    {
      picUrl: '/assets/images/original/mimi/mimi_ecobotanist.png',
      frameStyle: 'black-frame circle small',
      content: {
        title: 'Mimi: draw by Ecobotanist',
        title2: 'Original design by Rin Linin',
        subTitle: 'Marker',
        description: 'An attack I got from ArtFight 2024, It just like in my design but with marker style.'
      },
      previewPic: {
        width: '220px',
        height: '220px',
        disabled: true
      }
    },
    {
      picUrl: '/assets/images/original/mimi/mimi_kayleona.gif?v=1',
      frameStyle: 'white-frame',
      content: {
        title: 'Mimi: draw by Kayleona',
        title2: 'Original design by Rin Linin',
        subTitle: 'CG',
        description: 'An attack I got from ArtFight 2024, I really like that tail animation.'
      },
      previewPic: {
        width: '220px',
        height: '210px',
        disabled: true
      }
    },
    {
      picUrl: '/assets/images/original/mimi/mimi_streetcatzzz.png?v=1',
      frameStyle: 'black-frame my-auto',
      content: {
        title: 'Mimi: draw by Streetcatzzz',
        title2: 'Original design by Rin Linin',
        subTitle: 'CG',
        description: 'An attack I got from ArtFight 2024, I really like that face and the background.'
      },
      previewPic: {
        width: '220px',
        height: '220px',
        disabled: true
      }
    }
  ];

  openMimiPeechiepeeps() {
    const artLabel = {
      picUrl: '/assets/images/original/mimi/mimi_peachiepeeps.gif',
      frameStyle: 'black-frame',
      content: {
        title: 'Mimi: draw by Peachiepeeps',
        title2: 'Original design by Rin Linin',
        subTitle: 'CG Animation',
        description: 'An attack I got from ArtFight 2024, I really like this animation!! It\'s so cute!!'
      }
    }
    openArtWorkLabel(this.matDialog, artLabel);
  }

}
