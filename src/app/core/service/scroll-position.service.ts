import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class ScrollEvent {
  value: number;
  option = new EventOption();
  constructor(data) {
    if (typeof data === 'number') {
      this.value = data;
      this.option = { eventEmit: true};
    }
  }
}

export class EventOption {
  eventEmit = true;
}

@Injectable({
  providedIn: 'root'
})
export class ScrollPositionService {
  private loadingPage = new BehaviorSubject<boolean>(false);
  loadingPage$ = this.loadingPage.asObservable();
  private scrollPosition = new BehaviorSubject<number>(0);
  scrollPosition$ = this.scrollPosition.asObservable();
  private windowHeight = new BehaviorSubject<number>(0);
  windowHeight$ = this.windowHeight.asObservable();
  private elementScrollPosition = new BehaviorSubject<ScrollEvent>(new ScrollEvent(0));
  elementScrollPosition$ = this.elementScrollPosition.asObservable();
  constructor() { }

  setLoading(val: boolean) {
    this.loadingPage.next(val);
  }

  setPosition(scrollY: number) {
    this.scrollPosition.next(scrollY);
  }

  setWindowHeight(h: number) {
    this.windowHeight.next(h);
  }

  resetScrollToElementById() {
    this.elementScrollPosition.next({value: 0, option: {eventEmit: false}});
  }

  setScrollToElementById(id: string, minusScroll = 0, option = { eventEmit: true}): boolean {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top - (this.windowHeight.value/5) - minusScroll;
      this.elementScrollPosition.next({value: y, option});
      return true;
    }
    return false;
  }
}
