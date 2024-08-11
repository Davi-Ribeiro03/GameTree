interface TreeNodeProps {
  board: string[][];
  type: '+' | '-';
  children?: TreeNodeProps[];
  score?: number;
}

export const TreeNode: React.FC<TreeNodeProps> = ({ board, type, children, score }) => {
  return (
    <div className="m-2 p-4 border border-gray-700 rounded-lg bg-gray-900 shadow-md text-white">
      <div className="mb-4">
        <div className="text-lg font-bold"><strong>Type:</strong> {type}</div>
        <div className="text-lg font-bold"><strong>Score:</strong> {score !== undefined ? score : 'N/A'}</div>
      </div>
      <div className="mb-4">
        <div className="text-lg font-bold"><strong>Board:</strong></div>
        <pre className="font-mono p-2 border border-gray-700 rounded bg-gray-800">
          {board.map(row => row.join(' | ')).join('\n---------\n')}
        </pre>
      </div>
      {children && children.length > 0 && (
        <div>
          <div className="text-lg font-bold mb-4"><strong>Children:</strong></div>
          <div className="flex flex-wrap gap-4 justify-center">
            {children.map((child, index) => (
              <TreeNode key={index} {...child} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};