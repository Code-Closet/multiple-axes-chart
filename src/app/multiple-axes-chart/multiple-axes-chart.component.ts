import { Component, OnInit } from '@angular/core';
import { MULTIPLE_AXES_CHART_SETTINGS } from './multiple-axes-chart-settings';

declare var Highcharts: any;

@Component({
  selector: 'app-multiple-axes-chart',
  templateUrl: './multiple-axes-chart.component.html',
  styleUrls: ['./multiple-axes-chart.component.css']
})
export class MultipleAxesChartComponent implements OnInit {

  chart: any;
  chartSettings: any;
  ngOnInit() {
    this.chart = Highcharts.chart('chartContainer', MULTIPLE_AXES_CHART_SETTINGS);
  }

}
