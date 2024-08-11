import { useState } from "react";
import { buildTree } from "./buildTree";
import { TreeNode } from "./TreeNode";

interface TreeNodeProps {
  board: string[][];
  type: '+' | '-';
  children?: TreeNodeProps[];
  score?: number;
}

export const GameTree: React.FC = () => {
  const [tree, setTree] = useState<TreeNodeProps | null>(null);

  const handleGenerateTree = () => {
    const initialBoard: string[][] = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    const tree = buildTree(initialBoard, 3);
    setTree(tree);
  };

  return (
    <div className="mt-8">
      <button onClick={handleGenerateTree} className="mb-4 px-4 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600">
        Generate Game Tree
      </button>
      <div>
        {tree ? (
          <TreeNode {...tree} />
        ) : (
          <p className="text-white">No tree generated yet. Click "Generate Game Tree" to create the game tree.</p>
        )}
      </div>
    </div>
  );
};