import { TreeNodeProps } from "../types/TreeNodeProps.type";
import { bestBranch } from "./bestBranch";

export const buildTree = (
  board: string[][],
  depth: number,
  type: "+" | "-" = "+"
): TreeNodeProps => {
  if (depth === 0 || bestBranch(board) === 9 || bestBranch(board) === -9) {
    return {
      board,
      type,
      score: bestBranch(board),
      children: [],
    };
  }

  const children: TreeNodeProps[] = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === " ") {
        const newBoard = board.map((row) => row.slice());
        newBoard[i][j] = type === "+" ? "X" : "O";
        children.push(buildTree(newBoard, depth - 1, type === "+" ? "-" : "+"));
      }
    }
  }

  return {
    board,
    type,
    children,
    score:
      type === "+"
        ? Math.max(...children.map((child) => child.score || 0))
        : Math.min(...children.map((child) => child.score || 0)),
  };
};
