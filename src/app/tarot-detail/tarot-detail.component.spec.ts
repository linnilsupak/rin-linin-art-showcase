import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotDetailComponent } from './tarot-detail.component';

describe('TarotDetailComponent', () => {
  let component: TarotDetailComponent;
  let fixture: ComponentFixture<TarotDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarotDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
