import { AfterViewInit, Component, inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { commissionTab } from '../core/enum/commission-tab.enum';
import { MoreButtonComponent } from "../shared/more-button/more-button.component";
import { ReflectionFontComponent } from "../shared/reflection-font/reflection-font.component";
import { DetailCommissionExampleComponent } from "./detail-commission-example/detail-commission-example.component";
import { FaceCommissionExampleComponent } from "./face-commission-example/face-commission-example.component";
import { FrameItemAnimationComponent } from "./frame-item-animation/frame-item-animation.component";
import { FullCommissionExampleComponent } from "./full-commission-example/full-commission-example.component";
import { HalfCommissionExampleComponent } from "./half-commission-example/half-commission-example.component";
import { mainConfig } from '../core/config/main.config';
import { FrameItemMobileComponent } from "./frame-item-mobile/frame-item-mobile.component";
import { ScrollToCenterDirective } from '../shared/scroll-to-center.directive';

@Component({
    selector: 'app-commission',
    imports: [ReflectionFontComponent, TranslateModule, RouterLink, ScrollToCenterDirective,
        FrameItemAnimationComponent, MoreButtonComponent, FaceCommissionExampleComponent, HalfCommissionExampleComponent, FullCommissionExampleComponent, DetailCommissionExampleComponent, FrameItemMobileComponent],
    templateUrl: './commission.component.html',
    styleUrl: './commission.component.scss'
})
export class CommissionComponent implements OnDestroy, AfterViewInit {
  activeTab: commissionTab;
  commissionTab = commissionTab;
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private subscription = new Subscription();

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.subscription.add(
        this.route.queryParamMap.subscribe(queryMap => {
          if(queryMap.get('type')) {
            this.activeTab = commissionTab[queryMap.get('type')];
          } else {
            this.activeTab = undefined;
          }
        })
      );
    }, mainConfig.timeoutAfterInit);
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


}
