import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorInfoComponent } from './collector-info.component';

describe('CollectorInfoComponent', () => {
  let component: CollectorInfoComponent;
  let fixture: ComponentFixture<CollectorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectorInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
