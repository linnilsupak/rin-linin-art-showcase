import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import cloneDeep from 'lodash-es/cloneDeep';
import { debounceTime, Subscription } from 'rxjs';
import { mainConfig } from '../../core/config/main.config';
import { tarotConfig } from '../../core/config/tarot.config';
import { tarotCategory } from '../../core/enum/tarot-category.enum';
import { CardInfo } from '../../core/models/card-info.model';
import { TarotConfig } from '../../core/models/tarot-config.model';
import { TarotFormData } from '../../core/models/tarot-form-data.model';

@Component({
  selector: 'app-tarot-search',
  standalone: true,
  imports: [TranslateModule, MatButtonModule, RouterLink,
    MatFormFieldModule, MatSelectModule, MatInputModule,ReactiveFormsModule, MatAutocompleteModule],
  templateUrl: './tarot-search.component.html',
  styleUrl: './tarot-search.component.scss'
})
export class TarotSearchComponent implements OnInit, OnDestroy {
  readonly tarotCards: TarotConfig = cloneDeep(tarotConfig);
  @Input() 
  set formValue(val: TarotFormData) {
    this.filterForm.setValue(val, {emitEvent: false});
  }
  @Output() onSelectCard = new EventEmitter<TarotConfig>();
  @Output() onselectCategory = new EventEmitter<tarotCategory | ''>();
  @Output() searchVal = new EventEmitter<CardInfo>();
  preOrder = '?usp=pp_url&entry.946658341=%22Rin+Linin%22+Tarot:+Pre+order+(When+finished.)';
  tarotOptions: TarotConfig = cloneDeep(this.tarotCards);
  majorArcana = this.tarotOptions.major;
  cups = this.tarotOptions.cups;
  wands = this.tarotOptions.wands;
  swords = this.tarotOptions.swords;
  coins = this.tarotOptions.coins;
  showClose = false;
  filterForm = new FormGroup({
    category: new FormControl<tarotCategory | ''>(''),
    search: new FormControl<CardInfo | string>('')
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
  subscripton = new Subscription();
  ngOnInit(): void {
    this.subscripton.add(
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
    );
    this.subscripton.add(
      this.filterForm.controls.category.valueChanges.subscribe(val => {
        this.onselectCategory.emit(val);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscripton.unsubscribe();
  }

  displayFn(card: CardInfo): string {
    return card && card.name ? card.name : '';
  }

  clearSearch() {
    this.filterForm.controls.search.setValue('');
    this.selectCard(undefined);
  }

  selectCard(card: CardInfo) {
    this.searchVal.emit(card);
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
      const result = cloneDeep(this.tarotCards);
      Object.keys(this.tarotCards).forEach(key => {
        if (key===suitName) {
          result[key] = result[suitName].filter(item => item.name === card.name);
        } else {
          result[key] = undefined;
        }
      });
      this.showClose = true;
      this.onSelectCard.emit(result);
    } else {
      this.showClose = false;
      this.onSelectCard.emit(this.tarotCards);
    }
  }

  private filterOption(val: string | CardInfo, category: tarotCategory, suiteName: string) {
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

