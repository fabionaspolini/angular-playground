import { CalendarHeatmapComponent } from './heatmap/calendar-heatmap/calendar-heatmap.component';
import { SankeyEnergyComponent } from './sankey/energy-sankey/energy-sankey.component';
import { DiskTreemapComponent } from './treemap/disk/disk-treemap.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "heatmap/calendar", component: CalendarHeatmapComponent },
  { path: "sankey/energy", component: SankeyEnergyComponent },
  { path: "treemap/disk", component: DiskTreemapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
