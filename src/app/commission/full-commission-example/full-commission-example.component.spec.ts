import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCommissionExampleComponent } from './full-commission-example.component';

describe('FullCommissionExampleComponent', () => {
  let component: FullCommissionExampleComponent;
  let fixture: ComponentFixture<FullCommissionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullCommissionExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullCommissionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
