import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { openArtWorkLabel } from '../../core/utilities/open-art-work-label.util';
import { ImageSrcsetPipe } from "../../core/pipe/image-srcset.pipe";
import { GalleryRoomComponent } from "../../shared/gallery-room/gallery-room.component";

@Component({
    selector: 'app-linin-info',
    imports: [TranslateModule, ImageSrcsetPipe, GalleryRoomComponent],
    templateUrl: './linin-info.component.html',
    styleUrl: './linin-info.component.scss'
})
export class LininInfoComponent {
  private matDialog = inject(MatDialog);
  lininOri1 = [
    {
      picUrl: '/assets/images/original/linin/linin_look_at_ant.png?v=1',
      frameStyle: 'white-frame mini-frame-500',
      content: {
        title: 'Linin: Look at Ant',
        title2: 'Design & color by Rin Linin',
        subTitle: 'Watercolor',
        description: 'A picture I draw when I want to begin writing a stroy, a story about Linin.'
      },
      isRecTemplate: true,
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
    {
      picUrl: '/assets/images/original/linin/linin_icecream.png?v=1',
      frameStyle: 'white-frame mini-frame-500',
      content: {
        title: 'Linin: eating icecream',
        title2: 'Design & color by Rin Linin',
        subTitle: 'Watercolor',
        description: 'I just want to try using watercolor to create some rainbow effect.'
      },
      isRecTemplate: true,
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    }
  ];
  lininOri2 = [
    {
      picUrl: '/assets/images/original/linin/linin_dress.png',
      frameStyle: 'white-double-frame small',
      content: {
        title: 'Linin',
        title2: 'Original design by Rin Linin',
        subTitle: 'pencil',
        description: ''
      },
      isRecTemplate: true,
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    },
    {
      picUrl: '/assets/images/original/linin/linin_maid.png',
      frameStyle: 'black-frame m-auto',
      content: {
        title: 'Linin: maid outfit',
        title2: 'Original design by Rin Linin',
        subTitle: 'watercolor',
        description: 'I want to draw a maid but don\'t have the character for this outfit so I use Linin as a model.'
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    }
  ];
  lininOri3 =[
    {
      picUrl: '/assets/images/original/linin/linin_look_at_art.png',
      frameStyle: 'black-frame mini-frame-500',
      content: {
        title: 'Linin: Drawing',
        title2: 'Original design by Rin Linin',
        subTitle: 'watercolor',
        description: 'I just writ some story of Linin and she is drawing. This is an illustration for that scene.'
      },
      previewPic: {
        width: 'inherit',
        height: 'inherit',
        disabled: true
      }
    }
  ];
  lininFanart = [
    {
      picUrl: '/assets/images/original/linin/linin_on_swing.png',
      frameStyle: 'white-double-frame small',
      content: {
        title: 'Linin: design & color by Rin Linin',
        title2: 'line art by <a class="underline" href="https://www.deviantart.com/iamalittleneko" target="_blank">IamAlittleNeko</a>',
        subTitle: 'Watercolor',
        description: 'An art trade game I did with some friend. When I am bore I always ask someone looking friendly on the internet to play an art trade game with me.'
      },
      previewPic: {
        width: '285px',
        height: '417px',
        disabled: true
      }
    }
  ]

  openLininLittleNeko() {
    const nekoArtLabel = {
      picUrl: '/assets/images/original/linin/linin_on_swing.png',
      frameStyle: 'white-double-frame small',
      content: {
        title: 'Linin: design & color by Rin Linin',
        title2: 'line art by <a class="underline" href="https://www.deviantart.com/iamalittleneko" target="_blank">IamAlittleNeko</a>',
        subTitle: 'Watercolor',
        description: 'An art trade game I did with some friend. When I am bore I always ask someone looking friendly on the internet to play an art trade game with me.'
      }
    }
    openArtWorkLabel(this.matDialog, nekoArtLabel)
  }

}
