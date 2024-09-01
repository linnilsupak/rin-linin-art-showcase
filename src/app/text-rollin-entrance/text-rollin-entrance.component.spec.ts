import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRollinEntranceComponent } from './text-rollin-entrance.component';

describe('TextRollinEntranceComponent', () => {
  let component: TextRollinEntranceComponent;
  let fixture: ComponentFixture<TextRollinEntranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextRollinEntranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextRollinEntranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
