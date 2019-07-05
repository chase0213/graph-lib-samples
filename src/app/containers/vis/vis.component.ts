import { Component, OnInit } from '@angular/core';
import { rawData } from 'src/app/datasets/pajek/football.net';
import { PajekGraphParserService } from 'src/app/services/pajek-graph-parser.service';
import { Graph } from 'src/app/classes/graph';

@Component({
  selector: 'app-vis-container',
  templateUrl: './vis.component.html',
  styleUrls: ['./vis.component.scss']
})
export class VisContainerComponent implements OnInit {

  graph: Graph;

  constructor(
    private np: PajekGraphParserService,
  ) {
    this.graph = this.np.parse(rawData);
  }

  ngOnInit() {
  }

}
