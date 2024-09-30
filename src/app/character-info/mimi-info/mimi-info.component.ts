import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { openArtWorkLabel } from '../../core/utilities/open-art-work-label.util';
import { ImageSrcsetPipe } from "../../core/pipe/image-srcset.pipe";

@Component({
  selector: 'app-mimi-info',
  standalone: true,
  imports: [TranslateModule, ImageSrcsetPipe],
  templateUrl: './mimi-info.component.html',
  styleUrl: './mimi-info.component.scss'
})
export class MimiInfoComponent {
  private matDialog = inject(MatDialog);

  openMimiColorPic() {
    const artLabel = {
      picUrl: '/assets/images/original/mimi/mimi_ori_rin_linin.png?v=1',
      frameStyle: 'black-frame',
      content: {
        title: 'Mimi',
        title2: 'Original design by Rin Linin',
        subTitle: 'color pencil',
        description: ''
      }
    }
    openArtWorkLabel(this.matDialog, artLabel);
  }

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

  openMimiEcobotanist() {
    const artLabel = {
      picUrl: '/assets/images/original/mimi/mimi_ecobotanist.png',
      frameStyle: 'black-frame',
      content: {
        title: 'Mimi: draw by Ecobotanist',
        title2: 'Original design by Rin Linin',
        subTitle: 'CG',
        description: 'An attack I got from ArtFight 2024, It just like in my design but with marker style.'
      }
    }
    openArtWorkLabel(this.matDialog, artLabel);
  }

  openMimiKayleona() {
    const artLabel = {
      picUrl: '/assets/images/original/mimi/mimi_kayleona.gif?v=1',
      frameStyle: 'black-frame',
      content: {
        title: 'Mimi: draw by Kayleona',
        title2: 'Original design by Rin Linin',
        subTitle: 'CG',
        description: 'An attack I got from ArtFight 2024, I really like that tail animation.'
      }
    }
    openArtWorkLabel(this.matDialog, artLabel);
  }

  openMimiStreetcatzzz() {
    const artLabel = {
      picUrl: '/assets/images/original/mimi/mimi_streetcatzzz.png?v=1',
      frameStyle: 'black-frame',
      content: {
        title: 'Mimi: draw by Streetcatzzz',
        title2: 'Original design by Rin Linin',
        subTitle: 'CG',
        description: 'An attack I got from ArtFight 2024, I really like that face and the background.'
      }
    }
    openArtWorkLabel(this.matDialog, artLabel);
  }
}
