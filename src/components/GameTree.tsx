import { buildTree } from "./buildTree";
import { TreeNode } from "./TreeNode";
import { BoardPropType } from "../types/GameProps.type";

const DEPTH = 3;

export const GameTree = ({ board, tree, setTree }: BoardPropType) => {
  const handleGenerateTree = () => {
    const tree = buildTree(board, DEPTH - 1);

    setTree(tree);
  };

  return (
    <div className="mt-8">
      <button
        onClick={handleGenerateTree}
        className="mb-4 px-4 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Generate Game Tree
      </button>
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
