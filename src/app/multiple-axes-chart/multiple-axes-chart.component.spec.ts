import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleAxesChartComponent } from './multiple-axes-chart.component';

describe('MultipleAxesChartComponent', () => {
  let component: MultipleAxesChartComponent;
  let fixture: ComponentFixture<MultipleAxesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleAxesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleAxesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
