import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { openArtWorkLabel } from '../../core/utilities/open-art-work-label.util';
import { MatDialog } from '@angular/material/dialog';
import { ImageSrcsetPipe } from "../../core/pipe/image-srcset.pipe";

@Component({
  selector: 'app-witch-info',
  standalone: true,
  imports: [TranslateModule, ImageSrcsetPipe],
  templateUrl: './witch-info.component.html',
  styleUrl: './witch-info.component.scss'
})
export class WitchInfoComponent {
  private matDialog = inject(MatDialog);

  openWitchDesign() {
    const artLabel = {
      picUrl: '/assets/images/original/the_witch/the_witch_design_rin_linin.png',
      frameStyle: 'black-frame',
      content: {
        title: 'The dimension witch',
        title2: 'Original design by Rin Linin',
        subTitle: 'watercolor',
        description: ''
      }
    }
    openArtWorkLabel(this.matDialog, artLabel)
  }

  openWitchColorPic() {
    const artLabel = {
      picUrl: '/assets/images/original/the_witch/the_dimension_witch_rin_linin.png?v=9',
      frameStyle: 'white-frame small',
      content: {
        title: 'The dimension witch',
        title2: 'Original design by Rin Linin',
        subTitle: 'pencil',
        description: ''
      },
      isRecTemplate: true
    }
    openArtWorkLabel(this.matDialog, artLabel)
  }
  openWitchBlastoffspaceboy() {
    const artLabel = {
      picUrl: '/assets/images/original/the_witch/the_witch_Blastoffspaceboy.png?v=1',
      frameStyle: 'black-frame circle',
      content: {
        title: 'The dimension witch by Blastoffspaceboy',
        title2: 'character design by Rin Linin',
        subTitle: 'CG',
        description: 'An attack I got from Artfight 2024, she look scary on this pic but I think probably his style.'
      }
    }
    openArtWorkLabel(this.matDialog, artLabel)
  }

  openWitchMirzel() {
    const artLabel = {
      picUrl: '/assets/images/original/the_witch/the_witch_mirzel.png?v=1',
      frameStyle: 'white-frame',
      content: {
        title: 'The dimension witch by Mirzel',
        title2: 'character design by Rin Linin',
        subTitle: 'CG',
        description: 'An attack I got from Artfight 2024, look at how cool she is!!'
      },
      isRecTemplate: true
    }
    openArtWorkLabel(this.matDialog, artLabel)
  }

  openWitchLilaThAplePeela() {
    const artLabel = {
      picUrl: '/assets/images/original/the_witch/the_witch_lilaThAplePeela.png?v=1',
      frameStyle: 'white-frame',
      content: {
        title: 'The dimension witch by lilaThAplePeela',
        title2: 'character design by Rin Linin',
        subTitle: 'CG',
        description: 'An attack I got from Artfight 2024, look at how beautiful she is!!'
      },
      isRecTemplate: true
    }
    openArtWorkLabel(this.matDialog, artLabel)
  }
}
