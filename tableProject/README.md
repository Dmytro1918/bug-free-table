# 📊 Matrix Management System

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

A high-performance, interactive data grid application. This project demonstrates advanced **React** patterns, efficient **TypeScript** usage, and strategic rendering optimizations for handling large-scale datasets (up to 10,000 cells).

---

## 🔥 Key Features

- **Customizable Matrix**: Users can define $M$ (rows), $N$ (columns), and $X$ (nearest values) to generate a dynamic table.
- **Smart Data Visualization**:
  - **Live Totals**: Instant calculation of row sums.
  - **Statistical Insights**: 60th percentile calculation for each column.
- **Advanced Interactivity**:
  - **Cell Increments**: Click any cell to increase its value; all related sums and stats update automatically.
  - **Nearest Neighbors**: Hover over a cell to instantly highlight $X$ other cells with the closest numerical values across the entire matrix.
  - **Dynamic Heatmap**: Hover over a row's sum to toggle a percentage view and a background heatmap based on the maximum value in that specific row.
- **Row Management**: Seamlessly add or remove rows without losing data integrity.

---

## 🏗 Architecture & Design Patterns

This project follows a **Feature-Based Architecture**, ensuring that logic is decoupled from the UI:

- **State Management**: Pure **React Context API** used to manage the matrix state and interaction logic without external libraries like Redux.
- **Custom Hooks**: Encapsulated matrix logic within `useMatrix` for cleaner component interfaces.
- **Utility Functions**: All mathematical calculations (percentiles, nearest neighbors) are isolated in pure functions for testability.

### ⚡ Performance Optimization (The 100x100 Challenge)
To ensure smooth interaction even with 10,000 cells ($100 \times 100$):
* **Selective Rendering**: Implemented `React.memo` with custom comparison logic to prevent unnecessary re-renders of the entire grid.
* **Prop Drilling vs Context**: Strategic use of props for high-frequency updates (like hover states) to minimize Context Provider overhead.
* **Memoized Computations**: Heavy calculations for sums and percentiles are wrapped in `useMemo`, triggering only when data actually changes.

---

## 🛠 Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Pure CSS (Modules)
- **Tooling**: Vite (for lightning-fast development)

---
