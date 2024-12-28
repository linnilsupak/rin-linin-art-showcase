import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ReflectionFontComponent } from '../shared/reflection-font/reflection-font.component';
import { CardInfo } from '../core/models/card-info.model';
import { Subscription } from 'rxjs';
import { tarotConfig } from '../core/config/tarot.config';
import { ImagePlacementComponent } from "../shared/image-placement/image-placement.component";
import { CommonModule } from '@angular/common';
import { cardMeaningTab } from '../core/enum/card-meaning-tab.enum';

@Component({
  selector: 'app-tarot-detail',
  standalone: true,
  imports: [ReflectionFontComponent, TranslateModule, RouterLink, ImagePlacementComponent, CommonModule],
  templateUrl: './tarot-detail.component.html',
  styleUrl: './tarot-detail.component.scss'
})
export class TarotDetailComponent implements OnInit, OnDestroy {
  targetTarot: CardInfo;
  previousTarot: CardInfo;
  nextTarot: CardInfo;
  route = inject(ActivatedRoute);
  router = inject(Router);
  activeTab: cardMeaningTab = cardMeaningTab.UPRIGHT;
  cardMeaningTab = cardMeaningTab;
  private subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      this.route.paramMap.subscribe(params => {
        if (params.get('category')) {
          const targetIndex = tarotConfig[params.get('category')].findIndex(item => item.number.toString() === params.get('number'));
          const target = tarotConfig[params.get('category')][targetIndex];
          const previousIndex = targetIndex - 1;
          const nextIndex = targetIndex + 1;
          if (target) {
            this.targetTarot = target;
          } else {
          this.router.navigate(['/not-found']);
          }
          if (previousIndex >= 0) {
            this.previousTarot = tarotConfig[params.get('category')][previousIndex];
          }
          if (nextIndex < tarotConfig[params.get('category')].length) {
            this.nextTarot = tarotConfig[params.get('category')][nextIndex];
          }
        } else {
          this.router.navigate(['/not-found']);
        }
      })
    );
    this.subscription.add(
      this.route.queryParamMap.subscribe(query => {
        if (query.get('tab')) {
          this.activeTab = cardMeaningTab[query.get('tab').toUpperCase()];
        } else {
          this.activeTab = cardMeaningTab.UPRIGHT;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeActiveTab(tab: cardMeaningTab) {
    this.router.navigate(['/tarot-meaning', this.targetTarot.category.toLowerCase(), this.targetTarot.number], { queryParams: { tab: tab.toLowerCase()}})
  }
}
