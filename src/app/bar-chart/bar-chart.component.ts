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
      credits:{
        enabled:false
      },
      title: {
          text: '',
        //   align: 'left',
          enabled:false
      },
      subtitle: {
        //   text: 'Source: <a href="https://www.ssb.no/transport-og-reiseliv/landtransport/statistikk/innenlandsk-transport">SSB</a>',
        //   align: 'left'
      },
      xAxis: {
          categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      },
      yAxis: {
          min: 0,
          title:{
            text: 'Security rating'
          }
      },
      tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
          shared: true
      },
      plotOptions: {
          column: {
              stacking: 'percent',
              borderColor: null,
              borderRadius: '10px',
              dataLabels: {
                  enabled: false,
                  format: '{point.percentage:.0f}%'
              }
          }
      },
      series: [
        {
           name: 'blank',
           showInLegend:false,
           borderRadius:'10px',
           data: [{y:100,color:'rgba(229, 218, 235,0.5)'}, {y:100,color:'rgba(229, 218, 235,0.5)'}, {y:100,color:'rgba(229, 218, 235,0.5)'},{y:100,color:'rgba(229, 218, 235,0.5)'},{y:100,color:'rgba(229, 218, 235,0.5)'},{y:100,color:'rgba(229, 218, 235,0.5)'},{y:100,color:'rgba(229, 218, 235,0.5)'},{y:100,color:'rgba(229, 218, 235,0.5)'},{y:100,color:'rgba(229, 218, 235,0.5)'},{y:100,color:'rgba(229, 218, 235,0.5)'},{y:100,color:'rgba(229, 218, 235,0.5)'},{y:100,color:'rgba(229, 218, 235,0.5)'},
        ]
       },
         {
          name: 'light',
          showInLegend:false,
           borderRadius:'10px',
           data: [{y:100,color:'rgba(96, 29, 151,0.5)'}, {y:120,color:'rgba(96, 29, 151,0.5)'},{y:170,color:'rgba(96, 29, 151,0.5)'},{y:150,color:'rgba(96, 29, 151,0.5)'},{y:80,color:'rgba(96, 29, 151,0.5)'},{y:60,color:'rgba(96, 29, 151,0.5)'},{y:120,color:'rgba(96, 29, 151,0.5)'},{y:140,color:'rgba(96, 29, 151,0.5)'},{y:100,color:'rgba(96, 29, 151,0.5)'},{y:120,color:'rgba(96, 29, 151,0.5)'},{y:100,color:'rgba(96, 29, 151,0.5)'},{y:80,color:'rgba(96, 29, 151,0.5)'}]
      },
      {
        name: 'dark',
        showInLegend:false,
           borderRadius:'10px',
           data: [{y:130,color:'rgb(96, 29, 151)'}, {y:150,color:'rgb(96, 29, 151)'}, {y:170,color:'rgb(96, 29, 151)'},{y:100,color:'rgb(96, 29, 151)'},{y:110,color:'rgb(96, 29, 151)'},{y:180,color:'rgb(96, 29, 151)'},{y:100,color:'rgb(96, 29, 151)'},{y:130,color:'rgb(96, 29, 151)'},{y:90,color:'rgb(96, 29, 151)'},{y:170,color:'rgb(96, 29, 151)'},{y:130,color:'rgb(96, 29, 151)'},{y:100,color:'rgb(96, 29, 151)'}]
    }]
  } 

  Highcharts.chart('barContainer',this.options)
  }

  

}
