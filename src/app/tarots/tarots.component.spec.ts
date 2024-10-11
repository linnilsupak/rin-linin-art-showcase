import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotsComponent } from './tarots.component';

describe('TarotsComponent', () => {
  let component: TarotsComponent;
  let fixture: ComponentFixture<TarotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
