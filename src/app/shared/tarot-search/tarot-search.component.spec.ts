import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotSearchComponent } from './tarot-search.component';

describe('TarotSearchComponent', () => {
  let component: TarotSearchComponent;
  let fixture: ComponentFixture<TarotSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarotSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarotSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
