import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EChartsOption, format } from 'echarts';

@Component({
  selector: 'app-treemap-disk-tree',
  templateUrl: './treemap-disk-tree.component.html',
  styleUrls: ['./treemap-disk-tree.component.scss']
})
export class TreemapDiskTreeComponent implements OnInit {

  options: EChartsOption = {}

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>("http://localhost:4200/assets/data/disk.tree.json")
      .subscribe(data => this.options = this.getOptions(data))
  }

  getOptions(data: any[]): EChartsOption {
    return {
      title: {
        text: 'Disk Usage',
        left: 'center'
      },
      tooltip: {
        formatter: (info: any) => {
          const value = info.value;
          const treePathInfo = info.treePathInfo;
          const treePath = [];
          for (var i = 1; i < treePathInfo.length; i++) {
            treePath.push(treePathInfo[i].name);
          }
          return [
            `<div class="tooltip-title">${format.encodeHTML(treePath.join("/"))}</div>`,
            `Disk Usage: ${format.addCommas(value)} KB`
          ].join("")
        }
      },
      series: [
        {
          name: 'Disk Usage',
          type: 'treemap',
          visibleMin: 300,
          label: {
            show: true,
            formatter: '{b}'
          },
          upperLabel: {
            show: true,
            height: 30
          },
          itemStyle: {
            borderColor: '#fff'
          },
          levels: this.getLevelOption(),
          data: data
        }
      ]
    }
  }

  getLevelOption() {
    return [
      {
        itemStyle: {
          borderColor: '#777',
          borderWidth: 0,
          gapWidth: 1
        },
        upperLabel: {
          show: false
        }
      },
      {
        itemStyle: {
          borderColor: '#555',
          borderWidth: 5,
          gapWidth: 1
        },
        emphasis: {
          itemStyle: {
            borderColor: '#ddd'
          }
        }
      },
      {
        colorSaturation: [0.35, 0.5],
        itemStyle: {
          borderWidth: 5,
          gapWidth: 1,
          borderColorSaturation: 0.6
        }
      }
    ];
  }

}
