const { readInput } = require("../utils");

// Read and parse the input
const rawInput = readInput("./day3/input.txt");

/**
 * Solves the first part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the first part.
 */
function solvePart1(memory) {
  const regex = /mul\((\d+),(\d+)\)/g;
  const matches = [...memory.matchAll(regex)];
  return matches.reduce((sum, match) => {
    const a = parseInt(match[1]);
    const b = parseInt(match[2]);
    return sum + a * b;
  }, 0);
}

/**
 * Solves the second part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the second part.
 */
function solvePart2(memory) {
  const regex = /(mul\((\d+),(\d+)\))|(do\(\))|(don\'t\(\))/g;
  const matches = [...memory.matchAll(regex)];
  const results = matches.reduce(
    (acc, match) => {
      let [sum, isMul] = acc;
      if (match[0] === "do()") {
        return [sum, true];
      } else if (match[0] === "don't()") {
        return [sum, false];
      }
      if (!isMul) {
        return acc;
      }
      const a = parseInt(match[2]);
      const b = parseInt(match[3]);
      sum = sum + a * b;
      return [sum, isMul];
    },
    [0, true]
  );
  return results[0];
}

console.log("Part 1:", solvePart1(rawInput));
console.log("Part 2:", solvePart2(rawInput));

module.exports = { solvePart1, solvePart2 };
