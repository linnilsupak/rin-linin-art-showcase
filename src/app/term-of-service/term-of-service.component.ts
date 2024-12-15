import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollPositionService } from '../core/service/scroll-position.service';
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";

@Component({
  selector: 'app-term-of-service',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, RouterLink, CommonModule],
  templateUrl: './term-of-service.component.html',
  styleUrl: './term-of-service.component.scss'
})
export class TermOfServiceComponent {
  backUrl: any;
  characterData: any;
  generalRule = new Array(5);
  payment = new Array(3);
  process = new Array(4);
  revision = new Array(3)
  copyRight1 = new Array(6);
  copyRight2 = new Array(6)
  copyRight3 = new Array(3);
  commercial = new Array(3);
  refund = new Array(5);
  fragment;
  private scrollPositionService = inject(ScrollPositionService);

  clickRefund() {
    this.scrollPositionService.setScrollToElementById('refund');
  }

  clickRight() {
    this.scrollPositionService.setScrollToElementById('right');
  }

}
