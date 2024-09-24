import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElysiaInfoComponent } from './elysia-info.component';

describe('ElysiaInfoComponent', () => {
  let component: ElysiaInfoComponent;
  let fixture: ComponentFixture<ElysiaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElysiaInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElysiaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
