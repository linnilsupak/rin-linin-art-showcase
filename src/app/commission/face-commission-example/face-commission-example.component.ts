import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { commissionExampleConfig } from '../../core/config/commission-example.config';
import { PlaygroundMenuComponent } from "../../playground/playground-menu/playground-menu.component";
import { GalleryRoomComponent } from "../../shared/gallery-room/gallery-room.component";
import { ImageSrcsetPipe } from "../../core/pipe/image-srcset.pipe";
import { AvatarComponent } from "../../shared/avatar/avatar.component";
import { CustomerFeedbackComponent } from "../../shared/customer-feedback/customer-feedback.component";

@Component({
  selector: 'app-face-commission-example',
  standalone: true,
  imports: [TranslateModule, RouterLink, PlaygroundMenuComponent, GalleryRoomComponent, ImageSrcsetPipe, CustomerFeedbackComponent],
  templateUrl: './face-commission-example.component.html',
  styleUrl: './face-commission-example.component.scss'
})
export class FaceCommissionExampleComponent {
  facePortrait1 = commissionExampleConfig.facePortrait1;
  facePortrait2 = commissionExampleConfig.facePortrait2;
  facePortrait3 = commissionExampleConfig.facePortrait3;
  faceAvatar1 = commissionExampleConfig.faceAvatar1;
  faceWidescreen1 = commissionExampleConfig.faceWidescreen1;
  faceWidescreen2 = commissionExampleConfig.faceWidescreen2;
  faceWidescreen3 = commissionExampleConfig.faceWidescreen3;
  faceWidescreen4 = commissionExampleConfig.faceWidescreen4;
  faceWidescreen5 = commissionExampleConfig.faceWidescreen5;
  customerFeedback = {
    picUrl: '/assets/images/commission/face/arkean_widescreen.webp',
    picClass: 'w-100',
    avatarColor: 'green',
    avatarAlphabet: 'A',
    customerName: 'Arkean',
    refLink: 'https://www.fiverr.com/alartyrlinnil/create-stunning-manhwa-art-for-you',
    date: 'Aug 26, 2023',
    source: 'Fiverr',
    feedback: 'Once again some amazing work by Rin Linin! Strong recommendation!',
    description: `I draw Midnight, a protagonist from <a class="underline"
    href="https://www.royalroad.com/fiction/67499/the-machinist-of-the-apocalyptic-world"
    target="_blank">'The Machinist of the Apocalyptic World'</a> a novel by Arkean on royal road. She looking at her unfamiliar face in the mirror as she found herself in a game so real she can't distinguish from reality.`
  }

}
