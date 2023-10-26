import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  options:any;
  Highcharts:any = Highcharts;
  constructor() { }

  ngOnInit(): void {
    this.options = {
      chart: {
          type: 'column',
          renderTo:'barContainer'
      },
      title: {
          text: 'Vendors Breakdown',
          align: 'left'
      },
      subtitle: {
          text: 'Source: <a href="https://www.ssb.no/transport-og-reiseliv/landtransport/statistikk/innenlandsk-transport">SSB</a>',
          align: 'left'
      },
      xAxis: {
          categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Percent'
          }
      },
      tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
          shared: true
      },
      plotOptions: {
          column: {
              stacking: 'percent',
              dataLabels: {
                  enabled: false,
                  format: '{point.percentage:.0f}%'
              }
          }
      },
      series: [
        {
           name: 'blank',
           data: [{y:100,color:'gray'}, {y:100,color:'gray'}, {y:100,color:'gray'},{y:100,color:'gray'},{y:100,color:'gray'},{y:100,color:'gray'},{y:100,color:'gray'},{y:100,color:'gray'},{y:100,color:'gray'},{y:100,color:'gray'},{y:100,color:'gray'},{y:100,color:'gray'}]
       },
         {
          name: 'light',
          data: [{y:120,color:'aqua'}, {y:120,color:'aqua'},{y:120,color:'aqua'},{y:120,color:'aqua'},{y:120,color:'aqua'},{y:120,color:'aqua'},{y:120,color:'aqua'},{y:120,color:'aqua'},{y:120,color:'aqua'},{y:120,color:'aqua'},{y:120,color:'aqua'},{y:120,color:'aqua'}]
      },
      {
        name: 'dark',
        data: [{y:130,color:'purple'}, {y:130,color:'purple'}, {y:130,color:'purple'},{y:130,color:'purple'},{y:130,color:'purple'},{y:130,color:'purple'},{y:130,color:'purple'},{y:130,color:'purple'},{y:130,color:'purple'},{y:130,color:'purple'},{y:130,color:'purple'},{y:130,color:'purple'}]
    }]
  } 

  Highcharts.chart('barContainer',this.options)
  }

  

}
