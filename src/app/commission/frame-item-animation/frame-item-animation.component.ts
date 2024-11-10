import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { mainConfig } from '../../core/config/main.config';

@Component({
  selector: 'app-frame-item-animation',
  standalone: true,
  imports: [],
  templateUrl: './frame-item-animation.component.html',
  styleUrl: './frame-item-animation.component.scss'
})
export class FrameItemAnimationComponent implements AfterViewInit {
  @ViewChild('parentItem') parentItem: ElementRef<HTMLElement>;
  fullHeight = 900;
  fullWidth = 0;
  padding = 12;
  halfHeight = 0;
  widthSection = 0;

  topRightHeight = 438;
  rightWidth = 0;
  centerWidth = 0;
  leftWidth = 0;
  topRightOverflowHidden = false;
  bottomRightHeight = 438;
  bottomRightOverflowHidden = false;
  @HostListener('window:resize')
  public detectResize(): void {
    this.fullWidth = this.parentItem.nativeElement.offsetWidth;
    this.halfHeight = (this.fullHeight /2) - this.padding;
    this.widthSection = (this.fullWidth - (this.padding *2)) /3;
    this.rightWidth = this.widthSection;
    this.centerWidth = this.widthSection;
    this.leftWidth = this.widthSection;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.detectResize();
    }, mainConfig.timeoutAfterInit);
  }

  topRightActive() {
    this.topRightHeight = 790;
    this.bottomRightHeight = this.fullHeight - this.topRightHeight - this.padding;
    this.bottomRightOverflowHidden = true;
    this.leftWidth = 450;
  }

  topRightInactive() {
    this.topRightHeight = this.halfHeight;
    this.bottomRightHeight = this.halfHeight;
    this.leftWidth = this.widthSection;
    setTimeout(() => {
      this.bottomRightOverflowHidden = false;
    }, 620);
  }

  bottomRightActive() {
    this.bottomRightHeight = 740;
    this.topRightHeight = this.fullHeight - this.bottomRightHeight - this.padding;
    this.topRightOverflowHidden = true;
    this.leftWidth = 450;
  }

  bottomRightInactive() {
    this.bottomRightHeight = this.halfHeight;
    this.topRightHeight = this.halfHeight;
    this.leftWidth = this.widthSection;
    setTimeout(() => {
      this.topRightOverflowHidden = false;
    }, 620);
  }

  centerActive() {
    this.centerWidth = 620;
    // this.leftWidth =  this.widthSection - this.centerWidth;
    // this.rightWidth =  this.widthSection - this.centerWidth;
  }
  centerInactive() {
    // this.rightWidth = this.widthSection;
    // this.leftWidth = this.widthSection;
    this.centerWidth = this.widthSection;
  }

  rightActive() {
    this.rightWidth = 510;
    // this.centerWidth = this.widthSection - this.rightWidth;
  }

  rightInactive() {
    this.rightWidth = this.widthSection;
    // this.centerWidth = this.widthSection;

  }
}
