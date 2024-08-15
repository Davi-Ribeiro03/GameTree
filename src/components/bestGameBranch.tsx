import { TreeNodeProps } from "../types/TreeNodeProps.type";

const cloneNode = (node: TreeNodeProps): TreeNodeProps => {
  return {
    ...node,
    board: node.board.map((row) => [...row]),
    children: node.children.map((child) => cloneNode(child)),
  };
};

const bestGameBranch = (tree: TreeNodeProps): TreeNodeProps | undefined => {
  if (tree.children.length === 0) return cloneNode(tree);

  const bestChild = tree.children.reduce(
    (max, current) => (current.score! > max.score! ? current : max),
    tree.children[0]
  );

  const newTree = cloneNode(tree);

  newTree.children = [bestGameBranch(bestChild)!];

  return newTree;
};

export default bestGameBranch;
