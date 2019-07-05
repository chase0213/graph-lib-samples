import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Graph } from 'src/app/classes/graph';
import * as cytoscape from 'cytoscape/dist/cytoscape.min';

@Component({
  selector: 'app-cytoscape',
  templateUrl: './cytoscape.component.html',
  styleUrls: ['./cytoscape.component.scss']
})
export class CytoscapeComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas', {static: false})
  ref: ElementRef;

  @Input()
  graph: Graph;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.graph && this.ref) {
      let elements = [];
      for (let node of this.graph.nodes) {
        elements.push({
          data: {
            id: node.id,
            weight: node.weight,
          },
          position: {
            x: Math.floor(node.attrs.x * 1000),
            y: Math.floor(node.attrs.y * 1000),
          },
          locked: true,
        });
      }

      for (let edge of this.graph.edges) {
        elements.push({
          data: {
            id: edge.id,
            source: edge.srcID,
            target: edge.tgtID,
          }
        });
      }
      let cy = cytoscape({ elements: elements, container: this.ref.nativeElement });
    }
  }

}
