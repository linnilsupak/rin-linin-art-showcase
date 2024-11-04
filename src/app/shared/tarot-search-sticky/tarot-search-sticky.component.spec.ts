import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotSearchStickyComponent } from './tarot-search-sticky.component';

describe('TarotSearchStickyComponent', () => {
  let component: TarotSearchStickyComponent;
  let fixture: ComponentFixture<TarotSearchStickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarotSearchStickyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarotSearchStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
