import { EChartsOption } from 'echarts';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy-sankey',
  templateUrl: './energy-sankey.component.html',
  styleUrls: ['./energy-sankey.component.scss']
})
export class EnergySankeyComponent implements OnInit {

  options: EChartsOption = {}

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("http://localhost:4200/assets/data/energy.json")
      .subscribe(data => this.options = this.getOptions(data))
  }

  getOptions(data: any): EChartsOption {
    return {
      title: {
        text: 'Sankey Diagram'
      },
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'sankey',
          data: data.nodes,
          links: data.links,
          emphasis: {
            focus: 'adjacency'
          },
          lineStyle: {
            color: 'gradient',
            curveness: 0.5
          }
        }
      ]
    }
  }
}
