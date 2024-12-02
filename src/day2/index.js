const {
  readInput,
  parseLines,
  parseNumbers
} = require("../utils");

// Read and parse the input
const rawInput = readInput("./day2/input.txt");
const input = parseLines(rawInput);

/**
 * Checks if the given row of numbers is "safe" based on specific rules.
 * A row is considered safe if:
 * - The differences between adjacent numbers are no greater than 3.
 * - There are no consecutive identical numbers.
 * - The sequence does not change direction (ascending/descending).
 *
 * @param {number[]} row - Array of numbers to evaluate.
 * @returns {boolean} - True if the row is safe, false otherwise.
 */
function isSafe(row) {
  let direction = null;
  let safe = true;
  for (let i = 0; i < row.length - 1; i++) {
    const prev = row[i];
    const next = row[i + 1];
    const newDir = prev > next ? "asc" : "desc";
    const diff = Math.abs(prev - next);
    if ((direction && direction !== newDir) || diff > 3 || diff === 0) {
      safe = false;
    }
    direction = newDir;
  }
  return safe;
}

/**
 * Solves the first part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the first part.
 */
function solvePart1(lines) {
  const rows = lines.map((line) => parseNumbers(line, " "));
  const safeRows = rows.filter((row) => {
    return isSafe(row);
  });
  return safeRows.length;
}

/**
 * Solves the second part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the second part.
 */
function solvePart2(lines) {
  const rows = lines.map((line) => parseNumbers(line, " "));
  const safeRows = rows.filter((row) => {
    return (
      isSafe(row) ||
      Array(row.length)
        .fill(1)
        .some((_, i) => {
          const current = [...row];
          current.splice(i, 1);
          return isSafe(current);
        })
    );
  });
  return safeRows.length;
}

console.log("Part 1:", solvePart1(input));
console.log("Part 2:", solvePart2(input));

module.exports = { solvePart1, solvePart2 };
