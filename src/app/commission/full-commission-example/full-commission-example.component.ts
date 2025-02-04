import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ImageSrcsetPipe } from '../../core/pipe/image-srcset.pipe';
import { PlaygroundMenuComponent } from '../../playground/playground-menu/playground-menu.component';
import { GalleryRoomComponent } from '../../shared/gallery-room/gallery-room.component';
import { commissionExampleConfig } from '../../core/config/commission-example.config';
import { CustomerFeedbackComponent } from "../../shared/customer-feedback/customer-feedback.component";

@Component({
  selector: 'app-full-commission-example',
  standalone: true,
  imports: [TranslateModule, RouterLink, PlaygroundMenuComponent, GalleryRoomComponent, ImageSrcsetPipe, CustomerFeedbackComponent],
  templateUrl: './full-commission-example.component.html',
  styleUrl: './full-commission-example.component.scss'
})
export class FullCommissionExampleComponent {
  fullPortrait1 = commissionExampleConfig.fullPortrait1;
  fullPortrait2 = commissionExampleConfig.fullPortrait2;
  // fullPortrait3 = commissionExampleConfig.fullPortrait3;
  fullPortrait4 = commissionExampleConfig.fullPortrait4;
  fullWidescreen1 = commissionExampleConfig.fullWidescreen1;
  customerFeedback = {
    picUrl: '/assets/images/commission/full/full_commission_example.webp',
    picClass: 'limit-width mx-auto',
    isPortrait: true,
    avatarColor: 'green',
    avatarAlphabet: 'A',
    customerName: 'Arkean',
    refLink: 'https://www.fiverr.com/alartyrlinnil/create-stunning-manhwa-art-for-you',
    date: 'Sep 04, 2023',
    source: 'Fiverr',
    feedback: 'Rin Linin is fantastic to work with! They communicated very well each step of the way, providing a very smooth experience, taking my request and making it flourish far more than I had thought possible! 10/10, would absolutely work with Rin Linin again!',
    description: `I draw Midnight, a protagonist from <a class="underline"
    href="https://www.royalroad.com/fiction/67499/the-machinist-of-the-apocalyptic-world"
    target="_blank">'The Machinist of the Apocalyptic World'</a> a novel by Arkean on royal road. She looking at her unfamiliar face in the mirror as she found herself in a game so real she can't distinguish from reality.`
  }


}
