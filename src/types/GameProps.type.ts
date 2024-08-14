import { TreeNodeProps } from "./TreeNodeProps.type";

export interface BoardPropType{
    board: string[][],
    setBoard: Function
    tree?:TreeNodeProps|null
    setTree: Function
}