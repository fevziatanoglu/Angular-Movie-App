import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchItemComponent } from './movie-search-item.component';

describe('MovieSearchItemComponent', () => {
  let component: MovieSearchItemComponent;
  let fixture: ComponentFixture<MovieSearchItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieSearchItemComponent]
    });
    fixture = TestBed.createComponent(MovieSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
