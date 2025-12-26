export type CellId = number;
export type CellValue = number;

export interface ICell {
    id: CellId;
    amount: CellValue;
}

export type MatrixRow = ICell[];

export interface MatrixState {
    data: MatrixRow[];
    settings: {
        m: number; 
        n: number; 
        x: number; 
    };
}

export interface MatrixContextType {
    matrix: MatrixRow[];
    rowSums: number[];
    nearestIds: number[];
    columnPercentiles: number[];
    hoveredCell: ICell | null;
    setHoveredCell: (cell: ICell | null) => void;
    incrementCell: (id: number) => void;
    addRow: () => void;
    removeRow: (rowIndex: number) => void;
    xValue: number;
}

export interface TableCellProps {
  cell: ICell;
  percentage?: number;
  heatmapIntensity: number;
  isHighlighted: boolean; 
  onIncrement: (id: number) => void;
  onHover: (cell: ICell | null) => void;
}

export interface SetUpProps {
    onConfigSubmit: (m: number, n: number, x: number)=> void;
}

export interface TableRowProps {
    rowData: MatrixRow;
    rowIndex: number;
}