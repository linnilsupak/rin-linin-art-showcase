import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { commissionTab } from '../core/enum/commission-tab.enum';
import { MoreButtonComponent } from "../shared/more-button/more-button.component";
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";
import { DetailCommissionExampleComponent } from "./detail-commission-example/detail-commission-example.component";
import { FaceCommissionExampleComponent } from "./face-commission-example/face-commission-example.component";
import { FrameItemAnimationComponent } from "./frame-item-animation/frame-item-animation.component";
import { FullCommissionExampleComponent } from "./full-commission-example/full-commission-example.component";
import { HalfCommissionExampleComponent } from "./half-commission-example/half-commission-example.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-commission',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, RouterLink,
    FrameItemAnimationComponent, MoreButtonComponent, FaceCommissionExampleComponent, HalfCommissionExampleComponent, FullCommissionExampleComponent, DetailCommissionExampleComponent],
  templateUrl: './commission.component.html',
  styleUrl: './commission.component.scss'
})
export class CommissionComponent implements OnInit, OnDestroy {
  activeTab: commissionTab;
  commissionTab = commissionTab;
  tabOrderList = [commissionTab.FACE, commissionTab.HALF, commissionTab.FULL, commissionTab.DETAIL];
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      this.route.queryParamMap.subscribe(queryMap => {
        if(queryMap.get('type')) {
          this.activeTab = commissionTab[queryMap.get('type')];
        } else {
          this.activeTab = undefined;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeActiveTab(tab: commissionTab) {
    if (tab) {
      this.router.navigate(['/commission'], { queryParams: {type: tab.toString() }});
    } else {
      this.router.navigate(['/commission'], { queryParams: {type: '' }});
    }
  }

  clickNext() {
    let currentIndex = this.tabOrderList.indexOf(this.activeTab);
    let nextIndex = 0;
    if (currentIndex === -1) {
      currentIndex = 0;
    }
    nextIndex = currentIndex + 1;
    this.changeActiveTab(this.tabOrderList[nextIndex]);
  }

  clickPrevious() {
    let currentIndex = this.tabOrderList.indexOf(this.activeTab);
    let nextIndex = 0;
    if (currentIndex <= 0) {
      currentIndex = 1;
    }
    nextIndex = currentIndex - 1;
    this.changeActiveTab(this.tabOrderList[nextIndex]);
  }

}
