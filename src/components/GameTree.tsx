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
  const [isLoadingGenerateTree, setIsLoadingGenerateTree] = useState(false);
  const [isLoadingGenerateBestTree, setIsLoadingGenerateBestTree] = useState(false);
  const [depth, setDepth] = useState(3);

  const handleGenerateTree = async () => {
    setIsLoadingGenerateTree(true);
    try {
      setTimeout(async () => {
        const generatedTree = await buildTree(board, depth - 1, currentPlayer === "X" ? "+" : "-");
        setTree(generatedTree);
        setIsLoadingGenerateTree(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      setIsLoadingGenerateTree(false);
    }
  };

  const handleGenerateBestBranch = async () => {
    setIsLoadingGenerateBestTree(true);
    try {
      setTimeout(() => {
        const generatedTree = buildTree(board, depth - 1, currentPlayer === "X" ? "+" : "-");
        const treeUpdated = bestGame(generatedTree);
        setTree(treeUpdated);
        setIsLoadingGenerateBestTree(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      setIsLoadingGenerateBestTree(false);
    }
  };

  return (
    <div className="mt-6">
      <input
        type="text"
        placeholder="Enter depth"
        className="mb-2 p-2 rounded-lg bg-gray-800 placeholder:text-center text-white outline-none text-center "
        onChange={(e) => setDepth(parseInt(e.target.value))}
      />

      <div className="flex gap-2 justify-center">
        <a href="#treeNode">
          <button
            onClick={handleGenerateTree}
            className="mb-4 px-4 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600"
            disabled={isLoadingGenerateTree}
          >
            {isLoadingGenerateTree ? "Generating..." : "Generate Game Tree"}
          </button>
        </a>
        <a href="#treeNode">
          <button
            onClick={handleGenerateBestBranch}
            className="mb-4 px-4 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600"
            disabled={isLoadingGenerateBestTree}
          >
            {isLoadingGenerateBestTree ? "Generating..." : "Generate Best Branch"}
          </button>
        </a>
      </div>

      <div>
        {isLoadingGenerateTree || isLoadingGenerateBestTree ? (
          <p className="text-white">Loading...</p>
        ) : tree ? (
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
