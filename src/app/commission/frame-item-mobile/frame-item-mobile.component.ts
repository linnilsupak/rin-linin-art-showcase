import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { commissionTab } from '../../core/enum/commission-tab.enum';

@Component({
  selector: 'app-frame-item-mobile',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './frame-item-mobile.component.html',
  styleUrl: './frame-item-mobile.component.scss'
})
export class FrameItemMobileComponent {
  @Input() activeTab: commissionTab;
  @Output() changeActiveTab = new EventEmitter<commissionTab>();
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
    this.changeActiveTab.emit(this.tabOrderList[nextIndex]);
  }

  clickPrevious() {
    let currentIndex = this.tabOrderList.indexOf(this.activeTab);
    let nextIndex = 0;
    if (currentIndex <= 0) {
      currentIndex = 1;
    }
    nextIndex = currentIndex - 1;
    this.activeTab = this.tabOrderList[nextIndex];
    this.changeActiveTab.emit(this.tabOrderList[nextIndex]);
  }
}
