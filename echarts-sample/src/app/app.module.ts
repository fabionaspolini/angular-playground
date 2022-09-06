import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreemapDiskTreeComponent } from './treemap/disk-tree/treemap-disk-tree.component';
import { SankeyEnergyComponent } from './sankey/sankey-energy/sankey-energy.component';
import { CalendarHeatmapComponent } from './heatmap/calendar-heatmap/calendar-heatmap.component';

@NgModule({
  declarations: [
    AppComponent,
    TreemapDiskTreeComponent,
    SankeyEnergyComponent,
    CalendarHeatmapComponent
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
