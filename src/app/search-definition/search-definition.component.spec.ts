import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDefinitionComponent } from './search-definition.component';

describe('SearchDefinitionComponent', () => {
  let component: SearchDefinitionComponent;
  let fixture: ComponentFixture<SearchDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDefinitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
