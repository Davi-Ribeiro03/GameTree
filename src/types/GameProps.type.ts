import { TreeNodeProps } from "./TreeNodeProps.type";

export interface GameProps{
    board: string[][],
    setBoard: Function
    tree?:TreeNodeProps|null
    setTree: Function
    currentPlayer:string,
    setCurrentPlayer?:Function
}