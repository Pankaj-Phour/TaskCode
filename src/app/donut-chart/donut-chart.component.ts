import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Data retrieved from https://netmarketshare.com/
Highcharts.chart('donutcontainer', {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      margin: [0, 0, 0, 0],
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0,
        height: '60%',
        // width: '100%'
  },
  credits:{
    enabled:false
  },
  title: {
      text: '240',
      align: 'center',
      verticalAlign: 'middle',
      y: 30,
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
        colors:[
          'rgb(96, 29, 151)',
          'rgba(96, 29, 151,0.1)'
        ],
          dataLabels: {
              style: {
                  fontWeight: 'bold',
                  color: 'white'
              }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '100%',
      }
  },
  series: [{
      type: 'pie',
      name: 'spots',
      innerSize: '80%',
      data: [
          ['used', 80],
          ['available',20]
      ]
  }]
});

  }


  

}
