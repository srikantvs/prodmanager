import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsComponent } from './analytics.component';
import { ChartsModule, ThemeService } from 'ng2-charts';

describe('AnalyticsComponent', () => {
  let component: AnalyticsComponent;
  let fixture: ComponentFixture<AnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ChartsModule],
      declarations: [AnalyticsComponent],
      providers:[ThemeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check chart type', () => {
    expect(component.pieChartType).toEqual('pie');
  });

  it('check if chart legend is enabled ', () => {
    expect(component.pieChartLegend).toBeTruthy();
  });

  it('check if top products are rendered', () => {
    component.pieChartData3 = [1,2];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    
    expect(compiled.querySelector('#top3').textContent).toContain('Top 3 Products');
  });

});
