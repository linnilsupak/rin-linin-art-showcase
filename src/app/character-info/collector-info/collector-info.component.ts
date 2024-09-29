import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { openArtWorkLabel } from '../../core/utilities/open-art-work-label.util';
import { MatDialog } from '@angular/material/dialog';
import { ImageSrcsetPipe } from "../../core/pipe/image-srcset.pipe";

@Component({
  selector: 'app-collector-info',
  standalone: true,
  imports: [TranslateModule, ImageSrcsetPipe],
  templateUrl: './collector-info.component.html',
  styleUrl: './collector-info.component.scss'
})
export class CollectorInfoComponent {
  private matDialog = inject(MatDialog);

  openCollectorDesign() {
    const artLabel = {
      picUrl: '/assets/images/original/collector/the_collector_design_ori_rin_linin.png?v=1',
      frameStyle: 'black-frame',
      content: {
        title: 'The collector',
        title2: 'Original design by Rin Linin',
        subTitle: 'pencil',
        description: ''
      }
    }
    openArtWorkLabel(this.matDialog, artLabel)
  }

  openCollectorColorPic() {
    const artLabel = {
      picUrl: '/assets/images/original/collector/collector_gallery_ori_rin_linin.png?v=1',
      frameStyle: 'white-frame',
      content: {
        title: 'The collector',
        title2: 'Original design by Rin Linin',
        subTitle: 'watercolor',
        description: ''
      },
      isRecTemplate: true
    }
    openArtWorkLabel(this.matDialog, artLabel)
  }

  openCollectorChocoladka() {
    const artLabel = {
      picUrl: '/assets/images/original/collector/the_collector_cookie_chocoladka.png',
      frameStyle: 'black-frame',
      content: {
        title: 'The collector: draw by Cookie Chocoladka',
        title2: 'character design by Rin Linin',
        subTitle: 'pencil',
        description: 'A lucky ruffle I win from Cookie Chocoladka which she open on instagram. Oh my! I have never been this lucky before! Yay!'
      }
    }
    openArtWorkLabel(this.matDialog, artLabel)
  }

  openCollectorOverLoadwork() {
    const artLabel = {
      picUrl: '/assets/images/original/collector/the_collector_overloadwork.png',
      frameStyle: 'black-frame m-auto',
      content: {
        title: 'The collector: draw by OverloadWork',
        title2: 'character design by Rin Linin',
        subTitle: 'CG',
        description: 'An attack I got from Artfight 2024. This is only a thumbnail but I like it very much.'
      },
      isRecTemplate: true
    }
    openArtWorkLabel(this.matDialog, artLabel)
  }

  openCollectorOverLoadwork2() {
    const artLabel = {
      picUrl: '/assets/images/original/collector/the_collector_overloadwork2.png?v=1',
      frameStyle: 'white-frame',
      content: {
        title: 'The collector: draw by OverloadWork',
        title2: 'character design by Rin Linin',
        subTitle: 'CG',
        description: 'An attack I got from Artfight 2024, look at how cute he is!!'
      },
      isRecTemplate: true
    }
    openArtWorkLabel(this.matDialog, artLabel)
  }
}
