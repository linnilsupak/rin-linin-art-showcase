import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ImageSrcsetPipe } from "../../core/pipe/image-srcset.pipe";
import { MatDialog } from '@angular/material/dialog';
import { openArtWorkLabel } from '../../core/utilities/open-art-work-label.util';

@Component({
  selector: 'app-francois-info',
  standalone: true,
  imports: [TranslateModule, ImageSrcsetPipe],
  templateUrl: './francois-info.component.html',
  styleUrl: './francois-info.component.scss'
})
export class FrancoisInfoComponent {
  private matDialog = inject(MatDialog);

  openFrancoisDesign() {
    const artLabel = {
      picUrl: '/assets/images/original/francois/Francois_design_rin_linin.png',
      frameStyle: 'black-frame',
      content: {
        title: 'Francois',
        title2: 'Original design by Rin Linin',
        subTitle: 'pencil',
        description: ''
      }
    }
    openArtWorkLabel(this.matDialog, artLabel);
  }

  openFrancoisColorPic() {
    const artLabel = {
      picUrl: '/assets/images/original/francois/Francois_color_ori_rin_linin.png',
      frameStyle: 'black-frame',
      content: {
        title: 'Francois',
        title2: 'Original design by Rin Linin',
        subTitle: 'color pencil',
        description: ''
      }
    }
    openArtWorkLabel(this.matDialog, artLabel);
  }
}
