export const checkWin = (lines: string[][],player:string) =>
    lines.some((line) => line.every((cell) => cell === player));