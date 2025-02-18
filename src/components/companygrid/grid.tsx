"use client"

import { useState, useEffect } from "react"

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

  return (
    <div className=" ">

      {/* Small Grid for Mobile */}
      <div className="block sm:hidden w-full">
        <div className="bg-black rounded-lg shadow-lg p-1">
          <div className="w-full">
            <div className="grid gap-[4px]" style={{ gridTemplateRows: 'repeat(8, minmax(0, 1fr))' }}>
              {createGrid(8, 12).map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid gap-[4px]"
                  style={{ gridTemplateColumns: 'repeat(12, minmax(0, 1fr))' }}
                >
                  {row.map((cell) => (
                    <div
                      key={cell.id}
                      className={`aspect-square bg-[#06b84d] transition-colors duration-200 rounded-[2px] flex items-center justify-center`}
                    />
                  ))}
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
            {createGrid(8, 28).map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid gap-[10px] sm:gap-[18px] md:gap-5 lg:gap-6"
                style={{ gridTemplateColumns: 'repeat(28, minmax(0, 1fr))' }}
              >
                {row.map((cell) => (
                  <div
                    key={cell.id}
                    className={`h-[7px] w-[7px] sm:h-[14px] sm:w-[14px] md:h-4 md:w-4 lg:h-5 lg:w-5 bg-[#06b84d] transition-colors duration-200 rounded-[1px] sm:rounded-[2px] md:rounded-[3px] lg:rounded-[3px] flex items-center justify-center text-xs `}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
