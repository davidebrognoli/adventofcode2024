const { readInput, parseGrid } = require("../utils");

// Read and parse the input
const rawInput = readInput("./day6/input.txt");

function nextPosition(x, y, direction) {
  return [x + direction[0], y + direction[1]];
}

function isOutOfBounds(x, y, width, height) {
  if (x<0 || y<0 || x>=width || y>=height) {
    return true;
  }
  return false;
}

function isObstacle(x, y, obstacles) {
  return obstacles.has(`${x}-${y}`);
}

function changeDirection(direction) {
  const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  const index = directions.findIndex(dir => dir[0] === direction[0] && dir[1] === direction[1])
  return directions[(index + 1) % directions.length];
}

/**
 * Solves the first part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the first part.
 */
function solvePart1(rawInput) {
  const grid = parseGrid(rawInput);
  const obstacles = new Set();
  let guard;
  let direction = [0, -1];
  const width = grid[0].length;
  const height = grid.length;
  const visited = new Set();
  grid.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell === "^") {
        guard = [x, y];
      } else if (cell === "#") {
        obstacles.add(`${x}-${y}`);
      }
    })
  });
  visited.add(`${guard[0]}-${guard[1]}`);
  let next = nextPosition(guard[0], guard[1], direction);
  while (!isOutOfBounds(next[0], next[1], width, height)) {
    if (isObstacle(next[0], next[1], obstacles)) {
      direction = changeDirection(direction);
    } else {
      guard = next;
    }
    visited.add(`${guard[0]}-${guard[1]}`);
    next = nextPosition(guard[0], guard[1], direction);
  }
  return visited.size;
}

function isLoop(guard, direction, obstacles, width, height) {
  const visited = new Set(`${guard[0]}-${guard[1]}-${direction[0]}-${direction[1]}`);
  let next = nextPosition(guard[0], guard[1], direction);
  let loop = false;
  while (!loop && !isOutOfBounds(next[0], next[1], width, height)) {
    if (isObstacle(next[0], next[1], obstacles)) {
      direction = changeDirection(direction);
    } else if (visited.has(`${next[0]}-${next[1]}-${direction[0]}-${direction[1]}`)){
      loop = true;
    } else {
      guard = next;
    }
    visited.add(`${guard[0]}-${guard[1]}-${direction[0]}-${direction[1]}`);
    next = nextPosition(guard[0], guard[1], direction);
  }
  return loop;
}

/**
 * Solves the second part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the second part.
 */
function solvePart2(rawInput) {
  const grid = parseGrid(rawInput);
  const obstacles = new Set();
  let guard;
  let direction = [0, -1];
  const width = grid[0].length;
  const height = grid.length;
  grid.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell === "^") {
        guard = [x, y];
      } else if (cell === "#") {
        obstacles.add(`${x}-${y}`);
      }
    })
  });
  const newObstacles = new Set();
  let extendedObstacles = new Set();
  grid.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell !== "#") {
        extendedObstacles = new Set(obstacles);
        extendedObstacles.add(`${x}-${y}`);
      }
      if (isLoop(guard, direction, extendedObstacles, width, height)) {
        if (!obstacles.has(`${x}-${y}`)) {
          newObstacles.add(`${x}-${y}`);
        }
      }
    })
  });
  return newObstacles.size;
}

console.log("Part 1:", solvePart1(rawInput));
console.log("Part 2:", solvePart2(rawInput));

module.exports = { solvePart1, solvePart2 };
