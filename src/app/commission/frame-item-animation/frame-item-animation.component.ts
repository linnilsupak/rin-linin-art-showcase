import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { mainConfig } from '../../core/config/main.config';
import { commissionTab } from '../../core/enum/commission-tab.enum';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frame-item-animation',
  standalone: true,
  imports: [TranslateModule, RouterLink, CommonModule],
  templateUrl: './frame-item-animation.component.html',
  styleUrl: './frame-item-animation.component.scss'
})
export class FrameItemAnimationComponent implements AfterViewInit {
  @Output() activeTab = new EventEmitter<commissionTab>();
  @Input()
  set activeVal(val: commissionTab) {
    if (this.activeItem === val) return;
    let index = this.tabOrderList.findIndex((item) => item === val);
    if (index === -1) index = 0;
    this.itemActive(index, val, true);
  }
  @ViewChild('parentItem') parentItem: ElementRef<HTMLElement>;
  activeItem: commissionTab;
  fullHeight = 800;
  fullWidth = 0;
  padding = 12;
  widthSection = 0;
  loading = true;

  topRightHeight = 438;
  bottomRightHeight = 438;
  commissionTab = commissionTab;
  @HostListener('window:resize')
  public detectResize(): void {
    this.loading = true;
    this.fullWidth = this.parentItem.nativeElement.offsetWidth;
    this.widthSection = (this.fullWidth - (this.padding * 2)) / (this.tabOrderList.length);
    this.tabOrderList.forEach((item, index) => {
      this.tabList[index].width = this.widthSection;
    });
    this.loading = false;
  }
  tabOrderList = [commissionTab.FACE, commissionTab.HALF, commissionTab.FULL, commissionTab.DETAIL];
  tabList;
  activeWidth = {
    'FACE': 404,
    'HALF': 430,
    'FULL': 450,
    'DETAIL': 440
  };

  ngAfterViewInit(): void {
    // init tabList
    const list = [];
    this.tabOrderList.forEach(tabName => {
      list.push({
        name: tabName,
        activeWidth: this.activeWidth[tabName],
        class: tabName.toLowerCase() + '-example',
        width: ''
      })
    });
    this.tabList = list;
    setTimeout(() => {
      this.detectResize();
    }, mainConfig.timeoutAfterInit);
  }

  itemActive(index: number, tab: commissionTab, isClick = false) {
    if (isClick && this.activeItem === tab) { // toggle
      this.setActiveTab(undefined);
      isClick = false;
    }
    if (isClick) {
      this.resetStateActiveTab();
      if (!this.tabList) return;
      this.tabList[index].width = this.activeWidth[tab];
      this.setActiveTab(tab);
    }
    if (this.activeItem === undefined && !isClick) {
      this.tabList[index].width = this.widthSection + 20;
    }
  }

  itemInactive(tab: commissionTab, forceInactive = false) {
    if (this.activeItem === undefined || forceInactive) {
      let index = this.tabOrderList.findIndex((item) => item === tab);
      console.log('index', index)
      if (index === -1) index = 0;
      if (!this.tabList) return;
      this.tabList[index].width = this.widthSection;
    }
  }

  resetStateActiveTab() {
    this.itemInactive(this.activeItem, true);
  }


  setActiveTab(val: commissionTab) {
    this.activeItem = val;
    this.activeTab.next(val);
  }
}
