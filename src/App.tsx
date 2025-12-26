import React, { useState } from 'react';
import { InitialForm } from '../src/features/matrix/components/initialForm/initialForm';
import { MatrixProvider } from '../src/features/matrix/context/matrixContext';
import { MatrixTable } from '../src/features/matrix/components/matrixTable/matrixTable';
import './App.css';

interface MatrixConfig {
  m: number;
  n: number;
  x: number;
}

const App: React.FC = () => {
  const [config, setConfig] = useState<MatrixConfig | null>(null);

  const handleConfigSubmit = (m: number, n: number, x: number) => {
    setConfig({ m, n, x });
  };

  const handleReset = () => {
    setConfig(null);
  };

  return (
    <div className="app-container">
      {!config ? (
        <div className="setup-screen">
          <h1>Matrix Constructor</h1>
          <InitialForm onConfigSubmit={handleConfigSubmit} />
        </div>
      ) : (
        <MatrixProvider m={config.m} n={config.n} x={config.x}>
          <div className="matrix-screen">
            <header>
              <button onClick={handleReset} className="back-btn">
                ← Back to Settings
              </button>
              <h1>Matrix {config.m}x{config.n}</h1>
            </header>
            <MatrixTable />
          </div>
        </MatrixProvider>
      )}
    </div>
  );
};

export default App;