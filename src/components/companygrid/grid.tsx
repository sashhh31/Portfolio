"use client"

import { useState, useEffect } from "react"

// white - #ced4da
// green - #06b84d

export default function PixelGrid() {
  const createGrid = (rows: number, cols: number) =>
    Array.from({ length: rows }, (_, rowIndex) =>
      Array.from({ length: cols }, (_, colIndex) => ({
        id: `${rowIndex}-${colIndex}`,
        row: rowIndex,
        col: colIndex
      }))
    );

  // Perfect Capital "S" Shape in Large Grid (32x8)
  const greenCells = new Set([
    '1,10', '1,11', '1,12', '1,13', '1,14', // Top horizontal bar
    '2,10', // Vertical down
    '3,10', '3,11', '3,12', '3,13', '3,14', // Middle horizontal bar
    '4,14', '5,14', // Vertical up
    '6,10', '6,11', '6,12', '6,13', '6,14' // Bottom horizontal bar
  ]);

  // Perfect Capital "S" Shape in Small Grid (16x8)
  const greenCellsSmall = new Set([
    '1,4', '1,5', '1,6', '1,7', // Top horizontal bar
    '2,4', // Vertical down
    '3,4', '3,5', '3,6', // Middle horizontal bar
    '4,6', '5,6', // Vertical up
    '6,4', '6,5', '6,6', // Bottom horizontal bar
  ]);

  return (
    <div className=" ">

      {/* Small Grid for Mobile */}
      <div className="block sm:hidden w-full">
        <div className="bg-black rounded-lg shadow-lg p-1">
          <div className="w-full">
            <div className="grid gap-[4px]" style={{ gridTemplateRows: 'repeat(8, minmax(0, 1fr))' }}>
              {createGrid(8, 16).map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid gap-[4px]"
                  style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}
                >
                  {row.map((cell) => {
                    const cellCoord = `${cell.row},${cell.col}`;
                    const isGreen = greenCellsSmall.has(cellCoord);

                    return (
                      <div
                        key={cell.id}
                        className={`aspect-square ${isGreen ? 'bg-[#06b84d]' : 'bg-[#ced4da]'} transition-colors duration-200 rounded-[2px] flex items-center justify-center`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Large Grid for Desktop */}
      <div className="hidden sm:block bg-transparent">
        <div className="max-w-[1600px] rounded-md shadow-lg">
          <div className="grid gap-1" style={{ gridTemplateRows: 'repeat(8, minmax(0, 1fr))' }}>
            {createGrid(8, 32).map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid gap-[10px] sm:gap-[18px] md:gap-5 lg:gap-6"
                style={{ gridTemplateColumns: 'repeat(32, minmax(0, 1fr))' }}
              >
                {row.map((cell) => {
                  const cellCoord = `${cell.row},${cell.col}`;
                  const isGreen = greenCells.has(cellCoord);

                  return (
                    <div
                      key={cell.id}
                      className={`h-[7px] w-[7px] sm:h-[14px] sm:w-[14px] md:h-4 md:w-4 lg:h-5 lg:w-5 ${isGreen ? 'bg-[#06b84d]' : 'bg-[#ced4da]'} transition-colors duration-200 rounded-[1px] sm:rounded-[2px] md:rounded-[3px] lg:rounded-[3px] flex items-center justify-center text-xs `}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
