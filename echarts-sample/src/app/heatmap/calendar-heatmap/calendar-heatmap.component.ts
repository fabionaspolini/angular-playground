import { Component, OnInit } from '@angular/core';
import { EChartsOption, format, number } from 'echarts';

@Component({
  selector: 'app-calendar-heatmap',
  templateUrl: './calendar-heatmap.component.html',
  styleUrls: ['./calendar-heatmap.component.scss']
})
export class CalendarHeatmapComponent implements OnInit {

  options: EChartsOption = {
    title: {
      top: 30,
      left: 'center',
      text: 'Daily Step Count'
    },
    tooltip: {},
    visualMap: {
      min: 0,
      max: 10000,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      top: 65
    },
    calendar: {
      top: 120,
      left: 30,
      right: 30,
      cellSize: ['auto', 13],
      range: '2016',
      itemStyle: {
        borderWidth: 0.5
      },
      yearLabel: { show: false }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: this.getVirtulData('2016')
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  getVirtulData(year: string) {
    year = year || '2017';
    const date = number.parseDate(year + '-01-01');
    const end = number.parseDate(+year + 1 + '-01-01');
    // const dayTime = 3600 * 24 * 1000;
    var data: [string, number][] = [];
    for (let time = date; time < end; time = this.addDays(time, 1)) {
      data.push([
        format.formatTime('yyyy-MM-dd', time),
        Math.floor(Math.random() * 10000)
      ]);
    }
    return data;
  }

  addDays(date: Date, numOfDays: number) {
    const result = new Date(date)
    result.setDate(date.getDate() + numOfDays)
    return result;
  }

}
