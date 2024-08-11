import { calculateScore } from "./calculateScore";

interface TreeNodeProps {
  board: string[][];
  type: '+' | '-';
  children?: TreeNodeProps[];
  score?: number;
}

export const buildTree = (board: string[][], depth: number, type: '+' | '-' = '+'): TreeNodeProps => {
  if (depth === 0 || calculateScore(board) !== 0) {
    return {
      board,
      type,
      score: calculateScore(board),
      children: []
    };
  }

  const children: TreeNodeProps[] = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === ' ') {
        const newBoard = board.map(row => row.slice());
        newBoard[i][j] = type === '+' ? 'X' : 'O';
        children.push(buildTree(newBoard, depth - 1, type === '+' ? '-' : '+'));
      }
    }
  }

  return {
    board,
    type,
    children,
    score: type === '+' ? Math.max(...children.map(child => child.score || -Infinity)) : Math.min(...children.map(child => child.score || Infinity))
  };
};