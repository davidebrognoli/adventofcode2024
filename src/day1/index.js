const { readInput, parseNumbers } = require('../utils');

// Read and parse the input
const rawInput = readInput('./day1/input.txt');
const input = parseNumbers(rawInput);

/**
 * Solves the first part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the first part.
 */
function solvePart1(numbers) {
    return numbers.length
}

/**
 * Solves the second part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the second part.
 */
function solvePart2(numbers) {
    return numbers.length * 2
}

console.log('Part 1:', solvePart1(input));
console.log('Part 2:', solvePart2(input));

module.exports = { solvePart1, solvePart2 };
