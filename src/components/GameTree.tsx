import { buildTree } from "./buildTree";
import { TreeNode } from "./TreeNode";
import { GameProps } from "../types/GameProps.type";
import bestGame from "./bestGameBranch";
import { useState } from "react";

export const GameTree = ({
  board,
  tree,
  setTree,
  currentPlayer,
}: GameProps) => {
  const [depth, setDepth] = useState(3);
  const handleGenerateTree = () => {
    const tree = buildTree(board, depth - 1, currentPlayer === "X" ? "+" : "-");

    setTree(tree);
  };

  const handleGenerateBestBranch = () => {
    const tree = buildTree(board, depth - 1, currentPlayer === "X" ? "+" : "-");

    const treeUpdated = bestGame(tree);

    setTree(treeUpdated);
  };
  return (
    <div className="mt-6">
      <input
        type="text"
        placeholder="Digite a profundidade"
        className="mb-2 p-2 rounded-lg bg-gray-800 placeholder:text-center text-white outline-none text-center "
        name="digite"
        onChange={(e) => setDepth(parseInt(e.target.value))}
      />

      <div className="flex gap-2 justify-center ">
        <a href="#treeNode">
          <button
            onClick={() => {
              handleGenerateTree();
            }}
            className="mb-4 px-4 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Generate Game Tree
          </button>
        </a>
        <a href="#treeNode">
          <button
            onClick={handleGenerateBestBranch}
            className="mb-4 px-4 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Generate Best branch
          </button>
        </a>
      </div>
      <div>
        {tree ? (
          <TreeNode {...tree} />
        ) : (
          <p className="text-white">
            No tree generated yet. Click "Generate Game Tree" to create the game
            tree.
          </p>
        )}
      </div>
    </div>
  );
};
