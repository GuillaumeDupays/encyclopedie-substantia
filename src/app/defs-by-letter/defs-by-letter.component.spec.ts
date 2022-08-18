import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefsByLetterComponent } from './defs-by-letter.component';

describe('DefsByLetterComponent', () => {
  let component: DefsByLetterComponent;
  let fixture: ComponentFixture<DefsByLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefsByLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefsByLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
