import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  templateUrl: './external-chart.component.html',
  styleUrls: ['./external-chart.component.scss']
})
export class ExternalChartComponent implements OnInit {

  @Input()public width: number;
  @Input()public title: string;
  @Output()public chartClick = new EventEmitter<any>();

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  onChartClick(event) {
    this.chartClick.emit(event);
  }

  ngOnInit() {
  }
}
