import { Injectable } from '@angular/core';
import cloneDeep from 'lodash-es/cloneDeep';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { tarotConfig } from '../config/tarot.config';
import { TarotConfig } from '../models/tarot-config.model';
import { TarotFormData } from '../models/tarot-form-data.model';

@Injectable({
  providedIn: 'root'
})
export class TarotStoreService {
  private searchResult = new BehaviorSubject<TarotConfig | {val: TarotConfig, emitValue: boolean}>(cloneDeep(tarotConfig));
  searchResult$: Observable<TarotConfig> = this.searchResult.asObservable().pipe(
    filter(item => {
      return Object.hasOwn(item, 'emitValue') ? Boolean(item.emitValue): true;
    }),
    map(item => {
      return (Object.hasOwn(item, 'emitValue') ? item.val: item) as TarotConfig;
    })
  );
  private searchValOnTarotPage = new BehaviorSubject<TarotFormData>({category: '',search: ''});
  searchValOnTarotPage$ = this.searchValOnTarotPage.asObservable();
  private searchValOnSticky =  new BehaviorSubject<TarotFormData>({category: '',search: ''});
  searchValOnSticky$ = this.searchValOnSticky.asObservable();
  constructor() { }

  setSearchValOnTarotPage(val: TarotFormData) {
    this.searchValOnTarotPage.next(val);
  }
  setSearchValOnSticky(val: TarotFormData) {
    this.searchValOnSticky.next(val);
  }
  setSearchResult(val) {
    this.searchResult.next(val);
  }
}

