import { Component, OnInit } from '@angular/core';
import { MULTIPLE_AXES_CHART_SETTINGS } from './multiple-axes-chart-settings';
import { MultipleAxesChartModel } from './multiple-axes-chart.model';

declare var Highcharts: any;

@Component({
  selector: 'app-multiple-axes-chart',
  templateUrl: './multiple-axes-chart.component.html',
  styleUrls: ['./multiple-axes-chart.component.css']
})
export class MultipleAxesChartComponent implements OnInit {

  chart: any;
  chartSettings: MultipleAxesChartModel = MULTIPLE_AXES_CHART_SETTINGS;
  ngOnInit() {
    this.chart = Highcharts.chart('chartContainer', this.chartSettings);
  }

}
