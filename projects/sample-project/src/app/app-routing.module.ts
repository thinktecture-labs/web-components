import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgCanvasJsComponent } from './components/ng-canvas-js/ng-canvas-js.component';
import { NgChartJsComponent } from './components/ng-chart-js/ng-chart-js.component';
import { ReactCanvasJsComponent } from './components/react-canvas-js/react-canvas-js.component';
import { ReactChartJsComponent } from './components/react-chart-js/react-chart-js.component';
import { VueChartJsComponent } from './components/vue-chart-js/vue-chart-js.component';

const routes: Routes = [
  {
    path: '*',
    redirectTo: 'ng-chart-js',
    pathMatch: 'full'
  },
  {
    path: 'react-chart-js',
    component: ReactChartJsComponent
  },
  {
    path: 'react-canvas-js',
    component: ReactCanvasJsComponent
  },
  {
    path: 'ng-chart-js',
    component: NgChartJsComponent
  },
  {
    path: 'ng-canvas-js',
    component: NgCanvasJsComponent
  },
  {
    path: 'vue-chart-js',
    component: VueChartJsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
