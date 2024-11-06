import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { TarotSearchComponent } from '../tarot-search/tarot-search.component';
import { TarotStoreService } from '../../core/service/tarot-store.service';
import { tarotCategory } from '../../core/enum/tarot-category.enum';
import { TarotConfig } from '../../core/models/tarot-config.model';
import { CardInfo } from '../../core/models/card-info.model';
import { Subscription } from 'rxjs';
import { TarotFormData } from '../../core/models/tarot-form-data.model';

@Component({
  selector: 'app-tarot-search-sticky',
  standalone: true,
  imports: [TarotSearchComponent],
  templateUrl: './tarot-search-sticky.component.html',
  styleUrl: './tarot-search-sticky.component.scss'
})
export class TarotSearchStickyComponent implements OnInit, OnDestroy {
  @Input() hide = false;
  tarotStoreService = inject(TarotStoreService);
  selectedCategory: tarotCategory | '';
  selectedCard: CardInfo;
  subscription = new Subscription();
  tarotFormData: TarotFormData;
  _hide = false;

  ngOnInit(): void {
    this.subscription.add(
      this.tarotStoreService.searchValOnTarotPage$.subscribe((val) => {
        this.tarotFormData = val;
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  selectCard(result: TarotConfig) {
    this.tarotStoreService.setSearchResult(result);
    this.tarotStoreService.setSearchValOnSticky({category: this.selectedCategory, search: this.selectedCard});
  }
  selectCategory(category: tarotCategory | '') {
    this.selectedCategory = category;
    this.tarotStoreService.setSearchValOnSticky({category: this.selectedCategory, search: this.selectedCard});
  }

}
