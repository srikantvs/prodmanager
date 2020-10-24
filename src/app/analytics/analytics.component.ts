import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Viewprod } from '../models/viewprod';
import { AnalyticsService } from '../services/analytics.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartlabels = [];
  public pieChartData: number[] = [];


  public pieChartlabels3 = [];
  public pieChartData3: number[] = [];

  public pieChartlabels5 = [];
  public pieChartData5: number[] = [];

  public pieChartType = 'pie';
  public pieChartLegend = true;

  



  public topProducts: Viewprod[] = [];

  constructor(private analytics:AnalyticsService) {

    this.topProducts = this.analytics.viewedProdObj;

    this.topProducts.sort((prod1, prod2) => {
      return prod2.count1 - prod1.count1;
    });



    if (this.topProducts.length >= 3) {
      this.pieChartlabels3 = [this.topProducts[0].name1, this.topProducts[1].name1, this.topProducts[2].name1];
      this.pieChartData3 = [this.topProducts[0].count1, this.topProducts[1].count1, this.topProducts[2].count1];
    }

    
      for (let i = 0; i < this.topProducts.length; i++) {
        this.pieChartData[i] = this.topProducts[i].count1;
        this.pieChartlabels[i] = this.topProducts[i].name1;
      }
  }

  ngOnInit(): void {
  }

}
