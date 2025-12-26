import React from 'react';
import type { TableCellProps } from '../../types/types';
import './tableCell.css';

export const TableCell = React.memo(({ 
  cell, percentage, heatmapIntensity, isHighlighted, onIncrement, onHover 
}: TableCellProps) => {
  
  const heatmapStyle = {
    backgroundColor: percentage === undefined 
      ? `rgba(0, 255, 0, ${heatmapIntensity * 0.5})`
      : 'transparent'
  };

  return (
    <td
      className={`matrix-cell ${isHighlighted ? 'highlighted' : ''}`}
      style={heatmapStyle}
      onClick={() => onIncrement(cell.id)}
      onMouseEnter={() => onHover(cell)}
      onMouseLeave={() => onHover(null)}
    >
      {percentage !== undefined ? `${Math.round(percentage)}%` : cell.amount}
    </td>
  );
}); 