import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtTradeComponent } from './art-trade.component';

describe('ArtTradeComponent', () => {
  let component: ArtTradeComponent;
  let fixture: ComponentFixture<ArtTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtTradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
