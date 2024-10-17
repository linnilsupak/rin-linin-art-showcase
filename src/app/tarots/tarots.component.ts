import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReflectionFontComponent } from '../shared/reflection-font/reflection-font.component';
import { tarotConfig } from '../core/config/tarot.config';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { tarotCategory } from '../core/enum/tarot-category.enum';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import cloneDeep from 'lodash-es/cloneDeep';
import { debounceTime } from 'rxjs';
import { mainConfig } from '../core/config/main.config';
import { TarotConfig } from '../core/models/tarot-config.model';
import { CardInfo } from '../core/models/card-info.model';

@Component({
  selector: 'app-tarots',
  standalone: true,
  imports: [TranslateModule, ReflectionFontComponent,
    MatFormFieldModule, MatSelectModule, MatInputModule,ReactiveFormsModule, MatAutocompleteModule],
  templateUrl: './tarots.component.html',
  styleUrl: './tarots.component.scss'
})
export class TarotsComponent implements OnInit {
  readonly tarotConfig = cloneDeep(tarotConfig);
  tarots = this.tarotConfig;
  tarotOptions: TarotConfig = cloneDeep(tarotConfig);
  majorArcana = this.tarotOptions.major;
  cups = this.tarotOptions.cups;
  wands = this.tarotOptions.wands;
  swords = this.tarotOptions.swords;
  coins = this.tarotOptions.coins;
  filterForm = new FormGroup({
    category: new FormControl(''),
    search: new FormControl('')
  });
  tarotCategory = tarotCategory;
  category = [
    {value: '', label: 'All'},
    {value: tarotCategory.MAJOR_ARCANA, label: 'Major Arcana'},
    {value: tarotCategory.WANDS, label: 'Wands'},
    {value: tarotCategory.CUPS, label: 'Cups'},
    {value: tarotCategory.SWORDS, label: 'Sword'},
    {value: tarotCategory.COINS, label: 'Coins'},
  ];
  ngOnInit(): void {
    this.filterForm.controls.search.valueChanges.pipe(debounceTime(mainConfig.debounceTime)).subscribe((val) => {
      if (val) {
        this.majorArcana = this.filterOption(val, tarotCategory.MAJOR_ARCANA, 'major');
        this.cups = this.filterOption(val, tarotCategory.CUPS, 'cups');
        this.wands = this.filterOption(val, tarotCategory.WANDS, 'wands');
        this.swords = this.filterOption(val, tarotCategory.SWORDS, 'swords');
        this.coins = this.filterOption(val, tarotCategory.COINS, 'coins');
      } else {
        this.majorArcana = this.tarotOptions.major;
        this.cups = this.tarotOptions.cups;
        this.wands = this.tarotOptions.wands;
        this.swords = this.tarotOptions.swords;
        this.coins = this.tarotOptions.coins;
      }
    })
  }

  displayFn(card: CardInfo): string {
    return card && card.name ? card.name : '';
  }

  clearSearch() {
    this.tarots = this.tarotConfig;
    this.filterForm.controls.search.setValue('');
  }

  selectCard(card: CardInfo) {
    if (card) {
      let suitName;
      switch(card.category) {
        case tarotCategory.MAJOR_ARCANA:
          suitName = 'major';
          break;
        case tarotCategory.COINS:
          suitName = 'coins';
          break;
        case tarotCategory.CUPS:
          suitName = 'cups';
          break;
        case tarotCategory.SWORDS:
          suitName = 'swords';
          break;
        case tarotCategory.WANDS:
          suitName = 'wands';
          break;
      }
      const result = cloneDeep(this.tarotConfig);
      Object.keys(this.tarots).forEach(key => {
        if (key===suitName) {
          result[key] = result[suitName].filter(item => item.name === card.name);
        } else {
          result[key] = undefined;
        }
      });
      this.tarots = result;
    } else {
      this.tarots = this.tarotConfig;
    }
  }

  private filterOption(val: string, category: tarotCategory, suiteName: string) {
    if ((this.filterForm.controls.category.value === category.toString() || !this.filterForm.controls.category.value) && typeof val === 'string') {
      const suitName = category.substring(0, category.length - 1).replace('_', ' ').toLowerCase();
      return this.tarotOptions[suiteName].filter(item => {
        const subString = typeof val === 'string' ? cloneDeep(val).replace(item.number.toString(), '').toLowerCase(): '';
        return item.name.toLowerCase().includes(val.toLowerCase()) || (val.includes(item.number.toString()) && (subString.includes(suitName) || !subString));
      });
    } else {
      return [];
    }
  }
}
