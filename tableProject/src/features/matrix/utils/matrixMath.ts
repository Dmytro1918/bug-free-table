import type { MatrixRow} from "../types/types";

export const generateMatrix = (m: number, n: number): MatrixRow[] => {
    const matrix: MatrixRow[] = [];
    
    for (let i = 0; i < m; i++) {
        const row: MatrixRow = [];
        for (let j = 0; j < n; j++) {
        row.push({
            id: Math.floor(Math.random() * 1000000), 
            amount: Math.floor(Math.random() * 900) + 100, 
        });
        }
        matrix.push(row);
    }
    
    return matrix;
};

export const calculateColumnPercentiles = (data: MatrixRow[], percentile: number = 0.6): number[] => {
    if (data.length === 0) return [];
    const numCols = data[0].length;
    const result: number[] = [];

    for (let i = 0; i < numCols; i++) {
        const columnValues = data.map(row => row[i].amount).sort((a, b) => a - b);
        const index = Math.floor(percentile * (columnValues.length - 1));
        result.push(columnValues[index]);
    }
    return result;
};

export const findNearestCellIds = (
    data: MatrixRow[], 
    targetValue: number, 
    x: number, 
    excludeId: number
    ): number[] => {
    return data
        .flat()
        .filter(cell => cell.id !== excludeId)
        .sort((a, b) => Math.abs(a.amount - targetValue) - Math.abs(b.amount - targetValue))
        .slice(0, x)
        .map(cell => cell.id);
};

export const isWithin100 = (number:number) => {
    if(number > 0 && number <=100){
        return true;
    }
    return false;
}