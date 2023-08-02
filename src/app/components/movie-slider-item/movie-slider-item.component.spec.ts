import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSliderItemComponent } from './movie-slider-item.component';

describe('MovieSliderItemComponent', () => {
  let component: MovieSliderItemComponent;
  let fixture: ComponentFixture<MovieSliderItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieSliderItemComponent]
    });
    fixture = TestBed.createComponent(MovieSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
