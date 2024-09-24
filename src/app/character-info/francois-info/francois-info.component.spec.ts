import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrancoisInfoComponent } from './francois-info.component';

describe('FrancoisInfoComponent', () => {
  let component: FrancoisInfoComponent;
  let fixture: ComponentFixture<FrancoisInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrancoisInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrancoisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
