import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiskTreemapComponent } from './treemap/disk/disk-treemap.component';
import { EnergySankeyComponent } from './sankey/energy-sankey/energy-sankey.component';
import { CalendarHeatmapComponent } from './heatmap/calendar-heatmap/calendar-heatmap.component';
import { StackedLineComponent } from './line/stacked-line/stacked-line.component';
import { StackedAreaLineComponent } from './line/stacked-area-line/stacked-area-line.component';
import { BusLinesMapComponent } from './map/bus-lines-map/bus-lines-map.component';
import { AbmModule } from 'angular-baidu-maps';
import { BaiduMapComponent } from './map/baidu-map/baidu-map.component';

@NgModule({
  declarations: [
    AppComponent,
    DiskTreemapComponent,
    EnergySankeyComponent,
    CalendarHeatmapComponent,
    StackedLineComponent,
    StackedAreaLineComponent,
    BusLinesMapComponent,
    BaiduMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts")
    }),
    AbmModule.forRoot({
      apiKey: "KOmVjPVUAey1G2E8zNhPiuQ6QiEmAwZu",
      libraries: ['//api.map.baidu.com/library/RectangleZoom/1.2/src/RectangleZoom_min.js'],
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
