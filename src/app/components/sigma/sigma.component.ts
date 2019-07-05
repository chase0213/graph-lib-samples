import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Graph } from 'src/app/classes/graph';
import * as sigma from 'sigma';

@Component({
  selector: 'app-sigma',
  templateUrl: './sigma.component.html',
  styleUrls: ['./sigma.component.scss']
})
export class SigmaComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas', {static: false})
  ref: ElementRef;

  @Input()
  graph: Graph;

  constructor() {
  }

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.graph && this.ref) {
      let s = new sigma(this.ref.nativeElement);
      for (let node of this.graph.nodes) {
        s.graph.addNode({
          id: node.id,
          label: node.attrs.name,
          x: Math.floor(node.attrs.x * 1000),
          y: Math.floor(node.attrs.y * 1000),
          size: 1,
        });
      }

      for (let edge of this.graph.edges) {
        s.graph.addEdge({
          id: `${edge.srcID}_${edge.tgtID}`,
          source: edge.srcID,
          target: edge.tgtID,
        });
      }

      s.refresh();
    }
  }

}
