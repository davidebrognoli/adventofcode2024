const { readInput, parseGrid } = require("../utils");

// Read and parse the input
const rawInput = readInput("./day10/input.txt");

function nextIsValid(x, y, grid, prevValue) {
  const width = grid[0].length;
  const height = grid.length;
  return (
    x >= 0 &&
    x < height &&
    y >= 0 &&
    y < width &&
    parseInt(grid[x][y], 10) === prevValue + 1
  );
}

function searchPath(x, y, grid) {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue = [[x, y]];
  const reachableNines = new Set();

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();
    const currentValue = parseInt(grid[cx][cy], 10);

    if (currentValue === 9) {
      reachableNines.add(`${cx},${cy}`);
      continue;
    }

    for (const [dx, dy] of directions) {
      const nx = cx + dx;
      const ny = cy + dy;

      if (nextIsValid(nx, ny, grid, currentValue)) {
        queue.push([nx, ny]);
      }
    }
  }

  return reachableNines.size;
}

/**
 * Solves the first part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the first part.
 */
function solvePart1(rawInput) {
  const grid = rawInput.split("\n").map((line) => line.split(''));
  const height = grid.length;
  const width = grid[0].length;

  let totalScore = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (parseInt(grid[i][j], 10) === 0) {
        const score = searchPath(i, j, grid);
        totalScore += score;
      }
    }
  }

  return totalScore;
}

function explorePaths(x, y, grid) {
  const currentValue = parseInt(grid[x][y], 10);

  if (currentValue === 9) {
    return 1;
  }

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let pathCount = 0;

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nextIsValid(nx, ny, grid, currentValue)) {
      pathCount += explorePaths(nx, ny, grid);
    }
  }

  return pathCount;
}


/**
 * Solves the second part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the second part.
 */
function solvePart2(rawInput) {
  const grid = rawInput.split("\n").map((line) => line.split(''));
  const height = grid.length;
  const width = grid[0].length;
  let totalScore = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (parseInt(grid[i][j], 10) === 0) {
        totalScore += explorePaths(i, j, grid);
      }
    }
  }

  return totalScore;
}

console.log("Part 1:", solvePart1(rawInput));
console.log("Part 2:", solvePart2(rawInput));

module.exports = { solvePart1, solvePart2 };
