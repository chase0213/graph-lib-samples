import { Component, OnInit } from '@angular/core';
import { rawData } from 'src/app/datasets/pajek/football.net';
import { PajekGraphParserService } from 'src/app/services/pajek-graph-parser.service';
import { Graph } from 'src/app/classes/graph';

@Component({
  selector: 'app-sigma-container',
  templateUrl: './sigma.component.html',
  styleUrls: ['./sigma.component.scss']
})
export class SigmaContainerComponent implements OnInit {

  graph: Graph;

  constructor(
    private np: PajekGraphParserService,
  ) {
    this.graph = this.np.parse(rawData);
  }

  ngOnInit() {
  }

}
