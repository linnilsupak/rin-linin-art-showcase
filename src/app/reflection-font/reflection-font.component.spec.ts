import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionFontComponent } from './reflection-font.component';

describe('ReflectionFontComponent', () => {
  let component: ReflectionFontComponent;
  let fixture: ComponentFixture<ReflectionFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReflectionFontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReflectionFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
