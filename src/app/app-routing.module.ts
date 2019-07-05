import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisContainerComponent } from './containers/vis/vis.component';
import { CytoscapeContainerComponent } from './containers/cytoscape/cytoscape.component';
import { SigmaContainerComponent } from './containers/sigma/sigma.component';
import { RootContainerComponent } from './containers/root-container/root-container.component';


const routes: Routes = [
  { path: '', component: RootContainerComponent },
  { path: 'cytoscape', component: CytoscapeContainerComponent },
  { path: 'sigma', component: SigmaContainerComponent },
  { path: 'vis', component: VisContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
