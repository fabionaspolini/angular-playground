import { SankeyEnergyComponent } from './sankey/sankey-energy/sankey-energy.component';
import { TreemapDiskTreeComponent } from './treemap/disk-tree/treemap-disk-tree.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "sankey/energy", component: SankeyEnergyComponent },
  { path: "treemap/disk-tree", component: TreemapDiskTreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
