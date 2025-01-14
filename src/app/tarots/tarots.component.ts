import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import cloneDeep from 'lodash-es/cloneDeep';
import { tarotConfig } from '../core/config/tarot.config';
import { tarotCategory } from '../core/enum/tarot-category.enum';
import { TarotConfig } from '../core/models/tarot-config.model';
import { ReflectionFontComponent } from '../shared/reflection-font/reflection-font.component';
import { TarotSearchComponent } from "../shared/tarot-search/tarot-search.component";
import { TarotStoreService } from '../core/service/tarot-store.service';
import { Subscription } from 'rxjs';
import { TarotFormData } from '../core/models/tarot-form-data.model';
import { CardInfo } from '../core/models/card-info.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarots',
  standalone: true,
  imports: [TranslateModule, ReflectionFontComponent, RouterLink, TarotSearchComponent, CommonModule],
  templateUrl: './tarots.component.html',
  styleUrl: './tarots.component.scss'
})
export class TarotsComponent implements OnInit, OnDestroy {
  readonly tarotConfig = cloneDeep(tarotConfig);
  preOrder = '?usp=pp_url&entry.946658341=%22Rin+Linin%22+Tarot:+Pre+order+(When+finished.)';
  tarots: TarotConfig = this.tarotConfig;
  tarotOptions: TarotConfig = cloneDeep(tarotConfig);
  majorArcana = this.tarotOptions.major;
  cups = this.tarotOptions.cups;
  wands = this.tarotOptions.wands;
  swords = this.tarotOptions.swords;
  coins = this.tarotOptions.coins;
  tarotCategory = tarotCategory;
  selectedCategory: tarotCategory | '';
  tarotStoreService = inject(TarotStoreService);
  subscription = new Subscription();
  route = inject(ActivatedRoute);
  tarotFormData: TarotFormData;
  selectedCard: CardInfo;

  ngOnInit(): void {
    this.subscription.add(
      this.tarotStoreService.searchResult$.subscribe((result) => {
        this.tarots = result;
      })
    );
    this.subscription.add(
      this.tarotStoreService.searchValOnSticky$.subscribe(val => {
        this.tarotFormData = val;
      })
    );
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  selectCard(resultCard: TarotConfig) {
    this.tarots = resultCard;
    this.tarotStoreService.setSearchValOnTarotPage({category: this.selectedCategory, search: this.selectedCard});
  }

  selectCategory(category: tarotCategory | '') {
    this.selectedCategory = category;
    this.tarotStoreService.setSearchValOnTarotPage({category: this.selectedCategory, search: this.selectedCard});
  }

}
