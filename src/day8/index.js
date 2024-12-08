const { readInput, parseGrid } = require("../utils");

// Read and parse the input
const rawInput = readInput("./day8/input.txt");

function printGrid(width, height, values) {
  let grid = "";
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (values.has(`${x}-${y}`)) {
        grid += "#";
      } else {
        grid += ".";
      }
    }
    grid += "\n"; // Vai a capo alla fine di ogni riga
  }
  return grid;
}

function searchAntennas(grid) {
  const antennas = new Map();
  grid.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell !== ".") {
        if (!antennas.has(cell)) {
          antennas.set(cell, new Set());
        }
        antennas.get(cell).add([x, y]);
      }
    });
  });
  return antennas;
}

function calculateNodeDiff(nodeA, nodeB) {
  const xDiff = nodeA[0] - nodeB[0];
  const yDiff = nodeA[1] - nodeB[1];
  return [xDiff, yDiff];
}

function getNodeAntinodes(node, diff, width, height, single = false) {
  const nodes = [];
  let x = node[0] + diff[0];
  let y = node[1] + diff[1];

  while (x >= 0 && x < width && y >= 0 && y < height) {
    nodes.push([x, y]);
    if (single) break;
    x += diff[0];
    y += diff[1];
  }

  return nodes;
}

function getAntinodes(antennas, width, height, single = false) {
  const antinodes = new Set();
  for (const [key, valueSet] of antennas.entries()) {
    const values = Array.from(valueSet);

    if (!single) {
      values.forEach((value) => {
        antinodes.add(`${value[0]}-${value[1]}`);
      });
    }

    for (let i = 0; i < values.length; i++) {
      for (let j = i + 1; j < values.length; j++) {
        const diff = calculateNodeDiff(values[i], values[j]);
        const antinodeA = getNodeAntinodes(
          values[i],
          diff,
          width,
          height,
          single
        );
        const antinodeB = getNodeAntinodes(
          values[j],
          [-diff[0], -diff[1]],
          width,
          height,
          single
        );
        [...antinodeA, ...antinodeB].forEach((antinode) => {
          antinodes.add(`${antinode[0]}-${antinode[1]}`);
        });
      }
    }
  }
  return antinodes;
}

function solvePart(rawInput, single = false) {
  const grid = parseGrid(rawInput);
  const width = grid[0].length;
  const height = grid.length;
  const antennas = searchAntennas(grid);
  const antinodes = getAntinodes(antennas, width, height, single);
  console.log(printGrid(width, height, antinodes));
  return antinodes.size;
}

/**
 * Solves the first part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the first part.
 */
function solvePart1(rawInput) {
  return solvePart(rawInput, true);
}

/**
 * Solves the second part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the second part.
 */
function solvePart2(rawInput) {
  return solvePart(rawInput);
}

console.log("Part 1:", solvePart1(rawInput));
console.log("Part 2:", solvePart2(rawInput));

module.exports = { solvePart1, solvePart2 };
