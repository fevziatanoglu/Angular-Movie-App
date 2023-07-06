import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10SliderComponent } from './top10-slider.component';

describe('Top10SliderComponent', () => {
  let component: Top10SliderComponent;
  let fixture: ComponentFixture<Top10SliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Top10SliderComponent]
    });
    fixture = TestBed.createComponent(Top10SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
