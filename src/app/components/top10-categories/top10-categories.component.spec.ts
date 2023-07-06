import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10CategoriesComponent } from './top10-categories.component';

describe('Top10CategoriesComponent', () => {
  let component: Top10CategoriesComponent;
  let fixture: ComponentFixture<Top10CategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Top10CategoriesComponent]
    });
    fixture = TestBed.createComponent(Top10CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
