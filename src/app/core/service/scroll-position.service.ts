import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollPositionService {
  private scrollPosition = new BehaviorSubject<number>(0);
  scrollPosition$ = this.scrollPosition.asObservable();
  private windowHeight = new BehaviorSubject<number>(0);
  windowHeight$ = this.windowHeight.asObservable();
  private elementScrollPosition = new BehaviorSubject<number>(0);
  elementScrollPosition$ = this.elementScrollPosition.asObservable();
  constructor() { }

  setPosition(scrollY: number) {
    this.scrollPosition.next(scrollY);
  }

  setWindowHeight(h: number) {
    this.windowHeight.next(h);
  }

  setScrollToElementById(id: string, minusScroll = 0): boolean {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + this.windowHeight.value - minusScroll;
      this.elementScrollPosition.next(y);
      return true;
    }
    return false;
  }
}
