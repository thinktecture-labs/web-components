import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ExternalChartComponent } from './components/external-chart/external-chart.component';

@NgModule({
  declarations: [
    ExternalChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  entryComponents: [
    ExternalChartComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const custom = createCustomElement(ExternalChartComponent, {injector: this.injector});
    customElements.define('ex-chart', custom);
  }
}
