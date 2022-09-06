import { BaiduMapComponent } from './map/baidu-map/baidu-map.component';
import { BusLinesMapComponent } from './map/bus-lines-map/bus-lines-map.component';
import { StackedAreaLineComponent } from './line/stacked-area-line/stacked-area-line.component';
import { StackedLineComponent } from './line/stacked-line/stacked-line.component';
import { CalendarHeatmapComponent } from './heatmap/calendar-heatmap/calendar-heatmap.component';
import { EnergySankeyComponent } from './sankey/energy-sankey/energy-sankey.component';
import { DiskTreemapComponent } from './treemap/disk/disk-treemap.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "map/baidu-map", component: BaiduMapComponent },
  { path: "map/bus-lines", component: BusLinesMapComponent },
  { path: "heatmap/calendar", component: CalendarHeatmapComponent },
  { path: "line/stacked", component: StackedLineComponent },
  { path: "line/stacked-area", component: StackedAreaLineComponent },
  { path: "sankey/energy", component: EnergySankeyComponent },
  { path: "treemap/disk", component: DiskTreemapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
