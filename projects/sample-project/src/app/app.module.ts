import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { NgRealtimeChartComponent } from './components/ng-realtime-chart/ng-realtime-chart.component';
import { ReactChartJsComponent } from './components/react-chart-js/react-chart-js.component';
import { NgChartJsComponent } from './components/ng-chart-js/ng-chart-js.component';
import { NgCanvasJsComponent } from './components/ng-canvas-js/ng-canvas-js.component';
import { ReactCanvasJsComponent } from './components/react-canvas-js/react-canvas-js.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    NgRealtimeChartComponent,
    ReactChartJsComponent,
    NgChartJsComponent,
    NgCanvasJsComponent,
    ReactCanvasJsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartsModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
