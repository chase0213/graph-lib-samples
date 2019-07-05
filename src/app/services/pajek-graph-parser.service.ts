import { Injectable } from '@angular/core';
import { Node } from 'src/app/classes/node';
import { Edge } from 'src/app/classes/edge';
import { Graph } from 'src/app/classes/graph';

@Injectable({
  providedIn: 'root'
})
export class PajekGraphParserService {

  constructor() { }

  parse(rawData: string, lineSeparator:string="\n"): Graph  {
    let graph = new Graph();
    graph.nodes = [];
    graph.edges = [];

    let mode = null;
    let lines = rawData.split(lineSeparator);
    for (let line of lines) {
      if (line.indexOf("Vertices") >= 0) {
        mode = "node";
        continue;
      } else if (line.indexOf("*Arcs") >= 0) {
        mode = "arc";
        continue;
      } else if (line.indexOf("*Edges") >= 0) {
        mode = "edge";
        continue;
      }

      switch (mode) {
        case "node":
          let node = this._parseNode(line);
          if (node) {
            graph.nodes.push(node);
          }
          break;
        case 'arc':
          let arc = this._parseArc(line);
          if (arc) {
            graph.edges.push(arc);
          }
          break;
        case 'edge':
          let edge = this._parseEdge(line);
          if (edge) {
            graph.edges.push(edge);
          }
          break;
      }
    }
    return graph;
  }

  _parseLine(line: string, ignore: string=" "): string[] {
    let values = [];
    let stringMode = false;

    let s = "";
    for (let i = 0; i < line.length; i++) {
      // 文字列ではない文脈でスペースが来た場合、読み飛ばす
      if (line[i] == ignore && !stringMode) {
        if (s.length > 0) {
          values.push(s);
        }

        s = "";
        stringMode = false;
        continue;
      }

      // ダブルクオーテーション（開始
      if (line[i] == '"' && !stringMode) {
        stringMode = true;
        continue;
      }

      if (line[i] == '"' && stringMode) {
        stringMode = false;
        values.push(s);
        s = "";
        continue;
      }

      s += line[i];
    }

    if (s.length > 0) {
      values.push(s);
    }

    return values;
  }

  _parseNode(line: string): Node {
    let node = new Node();
    let values = this._parseLine(line);
    if (values.length <= 0) {
      return null;
    }

    const IDX_ID = 0;
    const IDX_NAME = 1;
    const IDX_X = 2;
    const IDX_Y = 3;
    const IDX_W = 4;

    node.id = values[IDX_ID];
    node.weight = parseFloat(values[IDX_W]);
    node.attrs = {
      'name': values[IDX_NAME],
      'x': parseFloat(values[IDX_X]),
      'y': parseFloat(values[IDX_Y]),
    };
    return node;
  }

  _parseArc(line: string): Edge {
    let edge = new Edge();
    let values = this._parseLine(line);
    if (values.length <= 0) {
      return null;
    }

    const IDX_SRC_ID = 0;
    const IDX_TGT_ID = 1;
    const IDX_W = 2;

    edge.directed = true;
    edge.srcID = values[IDX_SRC_ID];
    edge.tgtID = values[IDX_TGT_ID];
    edge.weight = parseFloat(values[IDX_W]);
    return edge;
  }

  _parseEdge(line: string): Edge {
    let edge = new Edge();
    let values = this._parseLine(line);
    if (values.length <= 0) {
      return null;
    }

    const IDX_SRC_ID = 0;
    const IDX_TGT_ID = 1;
    const IDX_W = 2;

    edge.directed = false;
    edge.srcID = values[IDX_SRC_ID];
    edge.tgtID = values[IDX_TGT_ID];
    edge.weight = parseFloat(values[IDX_W]);
    return edge;
  }

}
