import { Component } from '@angular/core';
import { commissionExampleConfig } from '../../core/config/commission-example.config';
import { PlaygroundMenuComponent } from "../../playground/playground-menu/playground-menu.component";
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ImageSrcsetPipe } from '../../core/pipe/image-srcset.pipe';
import { GalleryRoomComponent } from '../../shared/gallery-room/gallery-room.component';

@Component({
  selector: 'app-detail-commission-example',
  standalone: true,
  imports: [TranslateModule, RouterLink, PlaygroundMenuComponent, GalleryRoomComponent, ImageSrcsetPipe],
  templateUrl: './detail-commission-example.component.html',
  styleUrl: './detail-commission-example.component.scss'
})
export class DetailCommissionExampleComponent {
  detailPortrait1 = commissionExampleConfig.detailPortrait1;
  detailPortrait2 = commissionExampleConfig.detailPortrait2;
  detailWidescreen = commissionExampleConfig.detailWidescreen;
}
