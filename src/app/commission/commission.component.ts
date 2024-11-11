import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";
import { FrameItemAnimationComponent } from "./frame-item-animation/frame-item-animation.component";
import { commissionTab } from '../core/enum/commission-tab.enum';
import { MoreButtonComponent } from "../shared/more-button/more-button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-commission',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, RouterLink,
    FrameItemAnimationComponent, MoreButtonComponent],
  templateUrl: './commission.component.html',
  styleUrl: './commission.component.scss'
})
export class CommissionComponent {
  activeTab: commissionTab;
  commissionTab = commissionTab;
  tabOrderList = [commissionTab.FACE, commissionTab.HALF, commissionTab.FULL, commissionTab.DETAIL];

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
