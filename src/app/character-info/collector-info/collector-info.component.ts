import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { openArtWorkLabel } from '../../core/utilities/open-art-work-label.util';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-collector-info',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './collector-info.component.html',
  styleUrl: './collector-info.component.scss'
})
export class CollectorInfoComponent {
  private matDialog = inject(MatDialog);

  openCollectorChocoladka() {
    const artLabel = {
      picUrl: '/assets/images/original/collector/the_collector_cookie_chocoladka.jpeg',
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
      picUrl: '/assets/images/original/collector/the_collector_overloadwork2.png',
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
