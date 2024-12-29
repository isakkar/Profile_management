import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions1: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Number of students per year'
    },
    xAxis: {
      categories: ['2018', '2019', '2020', '2021', '2022']
    },
    yAxis: {
      title: {
        text: 'Number of students'
      }
    },
    series: [
      {
        name: 'Students',
        type: 'column',
        data: [500, 600, 650, 700, 750]
      }
    ]
  };

  chartOptions2: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Distribution of success rates'
    },
    series: [
      {
        name: 'Success rate',
        type: 'pie',
        data: [
          { name: 'Very Good', y: 25 },
          { name: 'Good', y: 35 },
          { name: 'Good Enough', y: 20 },
          { name: 'Passable', y: 15 },
          { name: 'Failure', y: 5 }
        ]
      }
    ]
  };

  chartOptions3: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Distribution of students per specialty'
    },
    xAxis: {
      categories: ['AI', 'Robotics', 'Big Data', 'Renewable Energies', 'Cybersecurity']
    },
    yAxis: {
      title: {
        text: 'Number of students'
      }
    },
    series: [
      {
        name: 'Students',
        type: 'bar',
        data: [100, 80, 120, 60, 50]
      }
    ]
  };
}
