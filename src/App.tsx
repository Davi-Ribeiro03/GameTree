import { GameTree } from './components/GameTree';
import { TicTacToe } from './components/TicTacToe';

const App: React.FC = () => {
  return (
    <div className="text-center p-8 bg-gray-900 min-h-screen">
      <TicTacToe />
      <GameTree />
    </div>
  );
};

export default App;
