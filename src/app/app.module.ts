import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultipleAxesChartComponent } from './multiple-axes-chart/multiple-axes-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MultipleAxesChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
