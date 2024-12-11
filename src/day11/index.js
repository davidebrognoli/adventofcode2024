const { readInput, parseNumbers } = require("../utils");

// Read and parse the input
const rawInput = readInput("./day11/input.txt");

function countStones(initialStones, blinks) {
  let counts = {};
  for (const stone of initialStones) {
    counts[stone] = (counts[stone] || 0) + 1;
  }

  for (let i = 0; i < blinks; i++) {
    let newCounts = {};

    for (const [stoneStr, count] of Object.entries(counts)) {
      const stone = parseInt(stoneStr, 10);

      if (stone === 0) {
        newCounts[1] = (newCounts[1] || 0) + count;
      } else if (String(stone).length % 2 === 0) {
        const digits = String(stone);
        const half = digits.length / 2;
        const left = parseInt(digits.slice(0, half), 10);
        const right = parseInt(digits.slice(half), 10);
        newCounts[left] = (newCounts[left] || 0) + count;
        newCounts[right] = (newCounts[right] || 0) + count;
      } else {
        const newStone = stone * 2024;
        newCounts[newStone] = (newCounts[newStone] || 0) + count;
      }
    }
    counts = newCounts;
  }
  return counts;
}

function solve(rawInput, blinks) {
  const initialStones = parseNumbers(rawInput, " ");
  const stones = countStones(initialStones, blinks);
  return Object.values(stones).reduce((sum, count) => sum + count, 0);
}

/**
 * Solves the first part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the first part.
 */
function solvePart1(rawInput) {
  return solve(rawInput, 25);
}

/**
 * Solves the second part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the second part.
 */
function solvePart2(rawInput) {
  return solve(rawInput, 75);
}

console.log("Part 1:", solvePart1(rawInput));
console.log("Part 2:", solvePart2(rawInput));

module.exports = { solvePart1, solvePart2 };
