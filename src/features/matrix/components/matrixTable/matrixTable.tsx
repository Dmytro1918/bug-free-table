import React from 'react';
import { useMatrix } from '../../context/matrixContext';
import { TableRow } from '../tableRow/tableRow';
import './matrixTable.css';

export const MatrixTable: React.FC = () => {
    const { matrix, columnPercentiles, addRow } = useMatrix();

    return (
        <div className="matrix-container">
        <table>
            <thead className="matrix-header">
            <tr>
                <th>Row #</th>
                {matrix[0]?.map((_, index) => (
                    <th key={index}>Col {index + 1}</th>
                ))}
                <th>Sum</th>
                <th>Delete</th>
            </tr>
            </thead>
            
            <tbody>
            {matrix.map((row, index) => (
                <TableRow 
                key={index}
                rowData={row} 
                rowIndex={index} 
                />
            ))}
            </tbody>

            <tfoot className="percentile-row">
                <tr>
                    <td>60th %</td>
                    {columnPercentiles.map((val, index) => (
                        <td key={index}>{val.toFixed(1)}</td>
                    ))}
                    <td>—</td>
                </tr>
            </tfoot>
        </table>
        
        <button onClick={addRow} className="add-row-btn">
            Add New Row
        </button>
        </div>
    );
};