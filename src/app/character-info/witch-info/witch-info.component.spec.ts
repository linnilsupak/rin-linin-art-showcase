import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WitchInfoComponent } from './witch-info.component';

describe('WitchInfoComponent', () => {
  let component: WitchInfoComponent;
  let fixture: ComponentFixture<WitchInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WitchInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WitchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
