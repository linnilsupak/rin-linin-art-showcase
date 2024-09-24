import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MimiInfoComponent } from './mimi-info.component';

describe('MimiInfoComponent', () => {
  let component: MimiInfoComponent;
  let fixture: ComponentFixture<MimiInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MimiInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MimiInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
