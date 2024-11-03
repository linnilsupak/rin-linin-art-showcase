import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import cloneDeep from 'lodash-es/cloneDeep';
import { debounceTime } from 'rxjs';
import { mainConfig } from '../core/config/main.config';
import { tarotConfig } from '../core/config/tarot.config';
import { tarotCategory } from '../core/enum/tarot-category.enum';
import { CardInfo } from '../core/models/card-info.model';
import { TarotConfig } from '../core/models/tarot-config.model';
import { ReflectionFontComponent } from '../shared/reflection-font/reflection-font.component';
import { TarotSearchComponent } from "../shared/tarot-search/tarot-search.component";

@Component({
  selector: 'app-tarots',
  standalone: true,
  imports: [TranslateModule, ReflectionFontComponent, RouterLink, TarotSearchComponent],
  templateUrl: './tarots.component.html',
  styleUrl: './tarots.component.scss'
})
export class TarotsComponent {
  readonly tarotConfig = cloneDeep(tarotConfig);
  preOrder = '?usp=pp_url&entry.946658341=%22Rin+Linin%22+Tarot:+Pre+order+(When+finished.)';
  tarots = this.tarotConfig;
  tarotOptions: TarotConfig = cloneDeep(tarotConfig);
  majorArcana = this.tarotOptions.major;
  cups = this.tarotOptions.cups;
  wands = this.tarotOptions.wands;
  swords = this.tarotOptions.swords;
  coins = this.tarotOptions.coins;
  tarotCategory = tarotCategory;
  selectedCategory: tarotCategory;

  selectCard(resultCard) {
    this.tarots = resultCard;
  }

  selectCategory(category: tarotCategory) {
    this.selectedCategory = category;
  }

}
