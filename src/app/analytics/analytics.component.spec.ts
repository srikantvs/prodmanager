import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsComponent } from './analytics.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

describe('AnalyticsComponent', () => {
  let component: AnalyticsComponent;
  let fixture: ComponentFixture<AnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ChartsModule,FormsModule],
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

  it('check if top 3 products are rendered', () => {
    component.pieChartData3 = [1,2];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    
    expect(compiled.querySelector('#top3').textContent).toContain('Top 3 Products');
  });

  it('check if product analytics are rendered', () => {
    component.pieChartData3 = [1, 2, 3, 4, 5];
    component.eachProdCheck = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    
    expect(compiled.querySelector('#topx').textContent).toContain('Product Analytics');
  });


  it('top 3 products shoud be shown', () => {
    component.pieChartData3 = [1,2,3,4];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(component.istop3checked).toBeTruthy();
    component.istop3checked = false;
    fixture.detectChanges();
    expect(component.istop3checked).toBeFalsy();
  });

  it('product analytics shoud be shown', () => {
    component.pieChartData3 = [1,2,3,4,5];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(component.eachProdCheck).toBeFalsy();
     component.eachProdCheck = true;
    fixture.detectChanges();
     expect(component.eachProdCheck).toBeTruthy();
  });


});
