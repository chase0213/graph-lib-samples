import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Graph } from 'src/app/classes/graph';
import * as vis from 'vis';

@Component({
  selector: 'app-vis',
  templateUrl: './vis.component.html',
  styleUrls: ['./vis.component.scss']
})
export class VisComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas', {static: false})
  ref: ElementRef;

  @Input()
  graph: Graph;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.graph && this.ref) {
      let data = {
        nodes: [],
        edges: [],
      };

      for (let node of this.graph.nodes) {
        data.nodes.push({
          id: node.id,
          label: node.attrs.name,
          x: Math.floor(node.attrs.x * 1000),
          y: Math.floor(node.attrs.y * 1000),
        });
      }

      for (let edge of this.graph.edges) {
        data.edges.push({
          from: edge.srcID,
          to: edge.tgtID,
        });
      }

      let g = new vis.Network(this.ref.nativeElement, data, {
        nodes: {
          shape: 'dot',
          scaling: {
            min: 10,
            max: 30
          },
          font: {
            size: 12,
            face: 'Tahoma'
          }
        },
        edges: {
          color:{inherit:true},
          width: 0.15,
        },
        interaction: {dragNodes: true},
        physics: {
          enabled: false,
        }
      });
    }
  }
}
