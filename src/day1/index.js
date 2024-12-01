const { readInput, parseLines, parseNumbers, sortNumbers } = require("../utils");

// Read and parse the input
const rawInput = readInput("./day1/input.txt");
const input = parseLines(rawInput);

/**
 * Solves the first part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the first part.
 */
function solvePart1(lines) {
  const [list1, list2] = lines.reduce((acc, line) => {
    const [first, second] = parseNumbers(line, ' ');
    acc[0].push(first);
    acc[1].push(second);
    return acc;
  }, [[],[]])
  const sortedList1 = sortNumbers(list1);
  const sortedList2 = sortNumbers(list2);
  return sortedList1.reduce((acc, curr, index) => {
    return acc + Math.abs(curr - sortedList2[index]);
  }, 0);
}

/**
 * Solves the second part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the second part.
 */
function solvePart2(lines) {
  const [list1, list2] = lines.reduce((acc, line) => {
    const [first, second] = parseNumbers(line, ' ');
    acc[0].push(first);
    acc[1].push(second);
    return acc;
  }, [[],[]])
  return list1.reduce((acc, curr) => {
    return acc + (curr * (list2.filter(n => n === curr) || 0).length);
  }, 0);
}

console.log("Part 1:", solvePart1(input));
console.log("Part 2:", solvePart2(input));

module.exports = { solvePart1, solvePart2 };
