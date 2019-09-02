import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/canvasjs.min';
import * as $ from 'jquery';

@Component({
  selector: 'app-ng-realtime-chart',
  templateUrl: './ng-realtime-chart.component.html',
  styleUrls: ['./ng-realtime-chart.component.scss']
})
export class NgRealtimeChartComponent implements OnInit {
  ngOnInit() {
    const dataPoints = [];
    let dpsLength = 0;
    const chart = new CanvasJS.Chart('chartContainer', {
      exportEnabled: true,
      data: [{
        type: 'spline',
        dataPoints,
      }]
    });

    $.getJSON('https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=25&length=20&type=json&callback=?', function(data) {
      $.each(data, function(key, value) {
        dataPoints.push({x: value[0], y: parseInt(value[1])});
      });
      dpsLength = dataPoints.length;
      chart.render();
      updateChart();
    });
    function updateChart() {
      // tslint:disable-next-line:max-line-length
      $.getJSON('https://canvasjs.com/services/data/datapoints.php?xstart=' + (dpsLength + 1) + '&ystart=' + (dataPoints[dataPoints.length - 1].y) + '&length=1&type=json&callback=?', function(data) {
        $.each(data, function(key, value) {
          dataPoints.push({
            x: parseInt(value[0]),
            y: parseInt(value[1])
          });
          dpsLength++;
        });

        if (dataPoints.length >  20 ) {
          dataPoints.shift();
        }
        chart.render();
        setTimeout(function() {updateChart(); }, 1000);
      });
    }
  }
}
