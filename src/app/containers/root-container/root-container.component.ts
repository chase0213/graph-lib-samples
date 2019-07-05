import { Component, OnInit } from '@angular/core';
import { rawData as usAirline } from 'src/app/datasets/pajek/us-airlines.net';
import { rawData as foodball } from 'src/app/datasets/pajek/football.net';
import { PajekGraphParserService } from 'src/app/services/pajek-graph-parser.service';
import { Graph } from 'src/app/classes/graph';

@Component({
  selector: 'app-root-container',
  templateUrl: './root-container.component.html',
  styleUrls: ['./root-container.component.scss']
})
export class RootContainerComponent implements OnInit {

  graphType: string = 'football';
  graph: Graph;
  graphUsAirline: Graph;
  graphFootball: Graph;

  constructor(
    private np: PajekGraphParserService,
  ) {
    this.graphUsAirline = this.np.parse(usAirline);
    this.graphFootball = this.np.parse(foodball);
    this.graph = this.graphFootball;
  }

  ngOnInit() {
  }

}
