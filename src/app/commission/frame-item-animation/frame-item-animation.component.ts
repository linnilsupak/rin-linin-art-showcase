import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { mainConfig } from '../../core/config/main.config';
import { commissionTab } from '../../core/enum/commission-tab.enum';

@Component({
  selector: 'app-frame-item-animation',
  standalone: true,
  imports: [],
  templateUrl: './frame-item-animation.component.html',
  styleUrl: './frame-item-animation.component.scss'
})
export class FrameItemAnimationComponent implements AfterViewInit {
  @Output() activeTab = new EventEmitter<commissionTab>();
  @Input()
  set activeVal(val: commissionTab) {
    if (this.activeItem === val) return;
    if (val === commissionTab.FACE) {
      this.topRightActive(true);
    }
    if (val === commissionTab.HALF) {
      this.bottomRightActive(true);
    }
    if (val === commissionTab.FULL) {
      this.centerActive(true);
    }
    if (val === commissionTab.DETAIL) {
      this.rightActive(true);
    }
  }
  @Input()
  set isExample(val: boolean) {
    this._isExample = val;
  }
  get isExample() {
    return this._isExample;
  }
  @ViewChild('parentItem') parentItem: ElementRef<HTMLElement>;
  activeItem: commissionTab;
  fullHeight = 900;
  fullWidth = 0;
  padding = 12;
  halfHeight = 0;
  widthSection = 0;

  topRightHeight = 438;
  rightWidth: number;
  centerWidth: number;
  leftWidth: number;
  bottomRightHeight = 438;
  commissionTab = commissionTab;
  private _isExample = false;
  @HostListener('window:resize')
  public detectResize(): void {
    this.fullWidth = this.parentItem.nativeElement.offsetWidth;
    this.halfHeight = (this.fullHeight / 2) - this.padding;
    this.widthSection = (this.fullWidth - (this.padding * 2)) / 3;
    this.rightWidth = this.widthSection;
    this.centerWidth = this.widthSection;
    this.leftWidth = this.widthSection;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.detectResize();
    }, mainConfig.timeoutAfterInit);
  }

  topRightActive(isClick = false) {
    if (isClick && this.activeItem === commissionTab.FACE) {
      this.setActiveTab(undefined);
      isClick = false;
    }
    if (isClick) {
      this.resetState();
      this.setActiveTab(commissionTab.FACE);
      this.topRightHeight = 790;
      this.leftWidth = 450;
      this.bottomRightHeight = this.fullHeight - this.topRightHeight - this.padding;
    }
    if (this.activeItem === undefined) {
      if (!isClick) {
        this.topRightHeight = 490;
        this.leftWidth = this.widthSection;
        this.bottomRightHeight = this.fullHeight - this.topRightHeight - this.padding;
      }
    }
  }

  topRightInactive(forceInactive = false) {
    if (this.activeItem === undefined || forceInactive) {
      this.topRightHeight = this.halfHeight;
      this.bottomRightHeight = this.halfHeight;
      this.leftWidth = this.widthSection;
    }
  }

  bottomRightActive(isClick = false) {
    if (isClick && this.activeItem === commissionTab.HALF) { // toggle
      this.setActiveTab(undefined);
      isClick = false;
    }
    if (isClick) {
      this.resetState();
      this.setActiveTab(commissionTab.HALF);
      this.bottomRightHeight = 800;
      this.leftWidth = 450;
      this.topRightHeight = this.fullHeight - this.bottomRightHeight - this.padding;
    }
    if (this.activeItem === undefined) {
      if (!isClick) {
        this.bottomRightHeight = 490;
        this.leftWidth = this.widthSection;
        this.topRightHeight = this.fullHeight - this.bottomRightHeight - this.padding;
      }
    }
  }

  bottomRightInactive(forceInactive = false) {
    if (this.activeItem === undefined || forceInactive) {
      this.bottomRightHeight = this.halfHeight;
      this.topRightHeight = this.halfHeight;
      this.leftWidth = this.widthSection;
    }
  }

  centerActive(isClick = false) {
    if (isClick && this.activeItem === commissionTab.FULL) { // toggle
      this.setActiveTab(undefined);
      isClick = false;
    }
    if (isClick) {
      this.resetState();
      this.setActiveTab(commissionTab.FULL);
    }
    if (this.activeItem === undefined || isClick) {
      this.centerWidth = 620;
    }
  }
  centerInactive(forceInactive = false) {
    if (this.activeItem === undefined || forceInactive) {
      this.centerWidth = this.widthSection;
    }
  }

  rightActive(isClick = false) {
    if (isClick && this.activeItem === commissionTab.DETAIL) { // toggle
      this.setActiveTab(undefined);
      isClick = false;
    }
    if (isClick) {
      this.resetState();
      this.setActiveTab(commissionTab.DETAIL);
    }
    if (this.activeItem === undefined || isClick) {
      this.rightWidth = 510;
    }
  }

  rightInactive(forceInactive = false) {
    if (this.activeItem === undefined || forceInactive) {
      this.rightWidth = this.widthSection;
    }
  }

  resetState() {
    if (this.activeItem === commissionTab.FACE) {
      this.topRightInactive(true);
    }
    if (this.activeItem === commissionTab.HALF) {
      this.bottomRightInactive(true);
    }
    if (this.activeItem === commissionTab.FULL) {
      this.centerInactive(true);
    }
    if (this.activeItem === commissionTab.DETAIL) {
      this.rightInactive(true);
    }
  }

  setActiveTab(val: commissionTab) {
    this.activeItem = val;
    this.activeTab.next(val);
  }
}
