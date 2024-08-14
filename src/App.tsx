import React, { useState } from "react";
import { GameTree } from "./components/GameTree";
import { TicTacToe } from "./components/TicTacToe";
import { TreeNodeProps } from "./types/TreeNodeProps.type";

const App: React.FC = () => {
  const [board, setBoard] = useState<string[][]>([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]);
  const [tree, setTree] = useState<TreeNodeProps | null>(null);

  return (
    <div className="text-center p-8 bg-gray-900 min-h-screen">
      <TicTacToe board={board} setBoard={setBoard} setTree={setTree} />
      <GameTree
        board={board}
        setBoard={setBoard}
        tree={tree}
        setTree={setTree}
      />
    </div>
  );
};

export default App;
