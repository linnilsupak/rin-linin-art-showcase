import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { openArtWorkLabel } from '../../core/utilities/open-art-work-label.util';

@Component({
  selector: 'app-linin-info',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './linin-info.component.html',
  styleUrl: './linin-info.component.scss'
})
export class LininInfoComponent {
  private matDialog = inject(MatDialog);

  openLininLittleNeko() {
    const nekoArtLabel = {
      picUrl: '/assets/images/original/linin/linin_on_swing.png',
      frameStyle: 'white-double-frame',
      content: {
        title: 'Linin: design & color by Rin Linin',
        title2: 'line art by IamAlittleNeko',
        subTitle: 'Watercolor',
        description: 'An art trade game I did with some friend. When I am bore I always ask someone looking friendly on the internet to play an art trade game with me.'
      }
    }
    openArtWorkLabel(this.matDialog, nekoArtLabel)
  }

}
