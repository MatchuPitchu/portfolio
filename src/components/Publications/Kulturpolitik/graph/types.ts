export interface NodeData {
  key: string;
  attributes: {
    label: string;
    x: number;
    y: number;
    size: number;
    color: string;
    weightedInDegree: string;
    weightedDegree: string;
    weightedOutDegree: string;
    group: string;
  };
}

export interface EdgeData {
  key: string;
  source: string;
  target: string;
  attributes: { color: string; size: number; force: string };
}

export interface Group {
  key: string;
  value: boolean;
}

export interface Dataset {
  nodes: NodeData[];
  edges: EdgeData[];
  groups: Group[];
}

export interface FiltersState {
  groups: Group[];
}
