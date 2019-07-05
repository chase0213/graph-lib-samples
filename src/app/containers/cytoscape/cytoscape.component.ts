import { Component, OnInit } from '@angular/core';
import { rawData } from 'src/app/datasets/pajek/football.net';
import { PajekGraphParserService } from 'src/app/services/pajek-graph-parser.service';
import { Graph } from 'src/app/classes/graph';

@Component({
  selector: 'app-cytoscape-container',
  templateUrl: './cytoscape.component.html',
  styleUrls: ['./cytoscape.component.scss']
})
export class CytoscapeContainerComponent implements OnInit {

  graph: Graph;

  constructor(
    private np: PajekGraphParserService,
  ) {
    this.graph = this.np.parse(rawData);
  }

  ngOnInit() {
  }

}
