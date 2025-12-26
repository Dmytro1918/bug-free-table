import React, { useState, useMemo } from 'react';
import type { TableRowProps } from '../../types/types';
import { useMatrix } from '../../context/matrixContext';
import { TableCell } from '../tableCell/tableCell'; 
import './tableRow.css';

export const TableRow = React.memo(({ rowData, rowIndex }: TableRowProps) => {
    const { 
        nearestIds, 
        incrementCell, 
        setHoveredCell 
    } = useMatrix();
    const { rowSums, removeRow } = useMatrix();
    const [isHoveringSum, setIsHoveringSum] = useState(false);

    const totalSum = rowSums[rowIndex];

    const maxInRow = useMemo(() => {
        return Math.max(...rowData.map(c => c.amount));
    }, [rowData]);

    return (
        <tr>
        <td className="row-number">{rowIndex + 1}</td>
        {rowData.map((cell) => (
            <TableCell
            key={cell.id}
            cell={cell}
            isHighlighted={nearestIds.includes(cell.id)}
            percentage={isHoveringSum ? (cell.amount / totalSum) * 100 : undefined}
            heatmapIntensity={cell.amount / maxInRow}
            onIncrement={incrementCell}
            onHover={setHoveredCell}
            />
        ))}
        <td 
            className="sum-cell"
            onMouseEnter={() => setIsHoveringSum(true)}
            onMouseLeave={() => setIsHoveringSum(false)}
        >
            {totalSum}
        </td>
        <td>
            <button onClick={() => removeRow(rowIndex)} className="delete-btn">
            &times;
            </button>
        </td>
        </tr>
    );
});