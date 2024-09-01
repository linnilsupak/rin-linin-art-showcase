import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollPositionService {
  private scrollPosition = new BehaviorSubject<number>(0);
  scrollPosition$ = this.scrollPosition.asObservable();
  private windowHeight = new BehaviorSubject<number>(0);
  windowHeight$ = this.windowHeight.asObservable();
  constructor() { }

  setPosition(scrollY: number) {
    this.scrollPosition.next(scrollY);
  }

  setWindowHeight(h: number) {
    this.windowHeight.next(h);
  }

}
