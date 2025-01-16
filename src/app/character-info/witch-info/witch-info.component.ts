import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryRoomComponent } from "../../shared/gallery-room/gallery-room.component";

@Component({
  selector: 'app-witch-info',
  standalone: true,
  imports: [TranslateModule, GalleryRoomComponent],
  templateUrl: './witch-info.component.html',
  styleUrl: './witch-info.component.scss'
})
export class WitchInfoComponent {
  witchMyart = [
    {
      picUrl: '/assets/images/original/the_witch/the_witch_design_rin_linin.png',
      frameStyle: 'black-frame',
      content: {
        title: 'The dimension witch',
        title2: 'Original design by Rin Linin',
        subTitle: 'watercolor',
        description: ''
      },
      previewPic: {
        width: '207px',
        height: '144px',
        disabled: true
      }
    },
    {
      picUrl: '/assets/images/original/the_witch/the_dimension_witch_rin_linin.png?v=9',
      frameStyle: 'white-frame small',
      content: {
        title: 'The dimension witch',
        title2: 'Original design by Rin Linin',
        subTitle: 'pencil',
        description: ''
      },
      isRecTemplate: true,
      previewPic: {
        width: '261px',
        height: '417px',
        disabled: true
      }
    }
  ];
  witchFanart = [
    {
      picUrl: '/assets/images/original/the_witch/the_witch_Blastoffspaceboy.png?v=1',
      frameStyle: 'black-frame circle',
      content: {
        title: 'The dimension witch by <a class="underline" href="https://artfight.net/~Blastoffspaceboy" target="_blank">Blastoffspaceboy</a>',
        title2: 'character design by Rin Linin',
        subTitle: 'CG',
        description: 'An attack I got from Artfight 2024, she look scary on this pic but I think probably his style.'
      },
      previewPic: {
        width: '224px',
        height: '241px',
        disabled: true
      }
    }, {
      picUrl: '/assets/images/original/the_witch/the_witch_mirzel.png?v=1',
      frameStyle: 'white-frame',
      content: {
        title: 'The dimension witch by <a class="underline" href="https://www.instagram.com/mirzelcanvas" target="_blank">Mirzel</a>',
        title2: 'character design by Rin Linin',
        subTitle: 'CG',
        description: 'An attack I got from Artfight 2024, look at how cool she is!!'
      },
      isRecTemplate: true,
      previewPic: {
        width: '224px',
        height: '224px',
        disabled: true
      }
    }, {
      picUrl: '/assets/images/original/the_witch/the_witch_lilaThAplePeela.png?v=1',
      frameStyle: 'white-frame',
      content: {
        title: 'The dimension witch by <a class="underline" href="https://toyhou.se/LilaThAplePeela" target="_blank">lilaThAplePeela</a>',
        title2: 'character design by Rin Linin',
        subTitle: 'CG',
        description: 'An attack I got from Artfight 2024, look at how beautiful she is!!'
      },
      isRecTemplate: true,
      previewPic: {
        width: '231px',
        height: '344px',
        disabled: true
      }
    }
  ];

}
