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

@NgModule({
  declarations: [
    AppComponent,
    DiskTreemapComponent,
    EnergySankeyComponent,
    CalendarHeatmapComponent,
    StackedLineComponent,
    StackedAreaLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts")
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
