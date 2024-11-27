import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceCommissionExampleComponent } from './face-commission-example.component';

describe('FaceCommissionExampleComponent', () => {
  let component: FaceCommissionExampleComponent;
  let fixture: ComponentFixture<FaceCommissionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceCommissionExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceCommissionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
