import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCommissionExampleComponent } from './detail-commission-example.component';

describe('DetailCommissionExampleComponent', () => {
  let component: DetailCommissionExampleComponent;
  let fixture: ComponentFixture<DetailCommissionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCommissionExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCommissionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
