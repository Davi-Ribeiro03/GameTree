import { useState } from "react";
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
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");

  return (
    <div className="text-center p-8 bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <TicTacToe
        board={board}
        setBoard={setBoard}
        setTree={setTree}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
      />

      <GameTree
        board={board}
        setBoard={setBoard}
        tree={tree}
        setTree={setTree}
        currentPlayer={currentPlayer}
      />
    </div>
  );
};

export default App;
