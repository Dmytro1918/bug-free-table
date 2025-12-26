import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import type { ICell, MatrixContextType, MatrixRow } from '../types/types';
import { generateMatrix, findNearestCellIds, calculateColumnPercentiles } from '../utils/matrixMath';

const initialContext: MatrixContextType = {
    matrix: [],
    rowSums: [],
    nearestIds: [],
    columnPercentiles: [],
    hoveredCell: null,
    setHoveredCell: () => {}, 
    incrementCell: () => {},
    addRow: () => {},
    removeRow: () => {},
    xValue: 0,
};

export const MatrixProvider: React.FC<{ m: number; n: number; x: number; children: React.ReactNode }> = ({ m, n, x, children }) => {
    const [matrix, setMatrix] = useState<MatrixRow[]>(() => generateMatrix(m, n));
    const [hoveredCell, setHoveredCell] = useState<ICell | null>(null);

    const rowSums = useMemo(() => {
        return matrix.map(row => row.reduce((sum, cell) => sum + cell.amount, 0));
    }, [matrix]);

    const columnPercentiles = useMemo(() => {
        return calculateColumnPercentiles(matrix);
    }, [matrix]);

    const nearestIds = useMemo(() => {
        if (!hoveredCell) return [];
        return findNearestCellIds(matrix, hoveredCell.amount, x, hoveredCell.id);
    }, [matrix, hoveredCell, x]);

    const incrementCell = useCallback((id: number) => {
        setMatrix(prev => prev.map(row => 
        row.map(cell => cell.id === id ? { ...cell, amount: cell.amount + 1 } : cell)
        ));
    }, []);

    const addRow = useCallback(() => {
        setMatrix(prev => [...prev, generateMatrix(1, n)[0]]);
    }, [n]);
    
    const removeRow = useCallback((rowIndex: number) => {
        setMatrix(prev => prev.filter((_, index) => index !== rowIndex));
        }, []);
        const value = {
            matrix,
            rowSums,
            nearestIds,
            columnPercentiles,
            hoveredCell,
            setHoveredCell,
            incrementCell,
            addRow,
            removeRow,
            xValue: x
        };
        return <MatrixContext.Provider value={value}>{children}</MatrixContext.Provider>;
};

export const useMatrix = () => {
    const context = useContext(MatrixContext);
    if (!context || Object.keys(context).length === 0) {    
        throw new Error('useMatrix must be used within MatrixProvider');
    }   
    return context;
};

const MatrixContext = createContext<MatrixContextType>(initialContext);
