export interface TreeNodeProps {
    board: string[][];
    type: "+" | "-";
    children: TreeNodeProps[];
    score?: number;
  }
  