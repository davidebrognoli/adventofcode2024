const { readInput, parseGrid } = require("../utils");

// Read and parse the input
const rawInput = readInput("./day4/input.txt");

function getAdjacentMas(grid, x, y) {
  const adjacent = [];
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      if (grid[y + i] && grid[y + i][x + j] === 'M') {
        if(grid[y + i + i] && grid[y + i + i][x + j + j] === 'A') {
          if(grid[y + i + i + i] && grid[y + i + i + i][x + j + j + j] === 'S') {
            adjacent.push({x, y, i, j});
          }
        }
      }
    }
  }
  return adjacent;
}

/**
 * Solves the first part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the first part.
 */
function solvePart1(rawInput) {
  const grid = parseGrid(rawInput);
  let counter = 0;
  for(let y = 0; y < grid.length; y++) {
    for(let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "X") {
        const adjacent = getAdjacentMas(grid, x, y);
        counter += adjacent.length;
      }
    }
  }
  return counter;
}

/**
 * Solves the second part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the second part.
 */
function solvePart2(rawInput) {
  const grid = parseGrid(rawInput);
  let counter = 0
  for(let y = 0; y < grid.length; y++) {
    for(let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "A") {
        const topLeft = grid[y - 1] && grid[y - 1][x - 1];
        const topRight = grid[y - 1] && grid[y - 1][x + 1];
        const bottomLeft = grid[y + 1] && grid[y + 1][x - 1];
        const bottomRight = grid[y + 1] && grid[y + 1][x + 1];
        if (topLeft === 'M' && bottomRight === 'S' || topLeft === 'S' && bottomRight === 'M') {
          if (topRight === 'M' && bottomLeft === 'S' || topRight === 'S' && bottomLeft === 'M') {
            counter++;
          }
        }
      }
    }
  }
  return counter;
}

console.log("Part 1:", solvePart1(rawInput));
console.log("Part 2:", solvePart2(rawInput));

module.exports = { solvePart1, solvePart2 };
