import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CytoscapeContainerComponent } from './containers/cytoscape/cytoscape.component';
import { VisContainerComponent } from './containers/vis/vis.component';
import { SigmaContainerComponent } from './containers/sigma/sigma.component';

import { CytoscapeComponent } from './components/cytoscape/cytoscape.component';
import { VisComponent } from './components/vis/vis.component';
import { SigmaComponent } from './components/sigma/sigma.component';

import { PajekGraphParserService } from './services/pajek-graph-parser.service';
import { RootContainerComponent } from './containers/root-container/root-container.component';

@NgModule({
  declarations: [
    AppComponent,

    CytoscapeContainerComponent,
    VisContainerComponent,
    SigmaContainerComponent,

    CytoscapeComponent,
    VisComponent,
    SigmaComponent,
    RootContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PajekGraphParserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
