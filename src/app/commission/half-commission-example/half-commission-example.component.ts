import { Component } from '@angular/core';
import { commissionExampleConfig } from '../../core/config/commission-example.config';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ImageSrcsetPipe } from '../../core/pipe/image-srcset.pipe';
import { PlaygroundMenuComponent } from '../../playground/playground-menu/playground-menu.component';
import { GalleryRoomComponent } from '../../shared/gallery-room/gallery-room.component';

@Component({
    selector: 'app-half-commission-example',
    imports: [TranslateModule, RouterLink, PlaygroundMenuComponent, GalleryRoomComponent, ImageSrcsetPipe],
    templateUrl: './half-commission-example.component.html',
    styleUrl: './half-commission-example.component.scss'
})
export class HalfCommissionExampleComponent {
  halfPortrait1 = commissionExampleConfig.halfPortrait1;
  // halfPortrait2 = commissionExampleConfig.halfPortrait2;
  halfPortrait3 = commissionExampleConfig.halfPortrait3;
  halfWidescreen1 = commissionExampleConfig.halfWidescreen1;



}
