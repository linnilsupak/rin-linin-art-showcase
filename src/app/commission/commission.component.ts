import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { commissionExampleConfig } from '../core/config/commission-example.config';
import { commissionTab } from '../core/enum/commission-tab.enum';
import { MoreButtonComponent } from "../shared/more-button/more-button.component";
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";
import { FaceCommissionExampleComponent } from "./face-commission-example/face-commission-example.component";
import { FrameItemAnimationComponent } from "./frame-item-animation/frame-item-animation.component";

@Component({
  selector: 'app-commission',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, RouterLink,
    FrameItemAnimationComponent, MoreButtonComponent, FaceCommissionExampleComponent],
  templateUrl: './commission.component.html',
  styleUrl: './commission.component.scss'
})
export class CommissionComponent {
  activeTab: commissionTab;
  commissionTab = commissionTab;
  tabOrderList = [commissionTab.FACE, commissionTab.HALF, commissionTab.FULL, commissionTab.DETAIL];
  facePortrait1 = commissionExampleConfig.facePortrait1;
  facePortrait2 = commissionExampleConfig.facePortrait2;
  facePortrait3 = commissionExampleConfig.facePortrait3;
  faceAvatar1 = commissionExampleConfig.faceAvatar1;
  faceWidescreen1 = commissionExampleConfig.faceWidescreen1;
  faceWidescreen2 = commissionExampleConfig.faceWidescreen2;
  faceWidescreen3 = commissionExampleConfig.faceWidescreen3;
  faceWidescreen4 = commissionExampleConfig.faceWidescreen4;
  faceWidescreen5 = commissionExampleConfig.faceWidescreen5;

  clickNext() {
    let currentIndex = this.tabOrderList.indexOf(this.activeTab);
    let nextIndex = 0;
    if (currentIndex === -1) {
      currentIndex = 0;
    }
    nextIndex = currentIndex + 1;
    this.activeTab = this.tabOrderList[nextIndex];
  }

  clickPrevious() {
    let currentIndex = this.tabOrderList.indexOf(this.activeTab);
    let nextIndex = 0;
    if (currentIndex <= 0) {
      currentIndex = 1;
    }
    nextIndex = currentIndex - 1;
    this.activeTab = this.tabOrderList[nextIndex];

  }

}
