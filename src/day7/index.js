const { readInput, parseLines, parseNumbers } = require("../utils");

// Read and parse the input
const rawInput = readInput("./day7/input.txt");

function getEquations(rawInput) {
  const lines = parseLines(rawInput);
  const equations = lines.map((line) => {
    const [left, right] = line.split(":");
    const leftParts = parseNumbers(left, ' ');
    const rightParts = parseNumbers(right, ' ');
    return { leftParts, rightParts };
  })
  return equations;
}

function generateResults(nums, withConcatenated = false) {
  const results = [];
  function goDeep(index, currentResult, withConcatenated) {
    if (index === nums.length) {
      results.push(currentResult);
      return;
    }

    goDeep(index + 1, currentResult + nums[index], withConcatenated);

    goDeep(index + 1, currentResult * nums[index], withConcatenated);

    if (withConcatenated) {
      const concatenated = parseInt(`${currentResult}${nums[index]}`, 10);
      goDeep(index + 1, concatenated, withConcatenated);
    }
  }
  goDeep(1, nums[0], withConcatenated);

  return results;
}

function isValidEquation(equation) {
  const { leftParts, rightParts } = equation;
  const results = generateResults(rightParts);
  return results.includes(leftParts[0]);
}

function isValidEquationFix(equation) {
  const { leftParts, rightParts } = equation;
  return Array(rightParts.length).fill(0).some((_, i) => {
    const results = generateResults(rightParts, true);
    return results.includes(leftParts[0]);
  })
}

/**
 * Solves the first part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the first part.
 */
function solvePart1(rawInput) {
  const equations = getEquations(rawInput);
  return equations.reduce((sum, equation) => {
    if (isValidEquation(equation)) {
      return sum + equation.leftParts[0];
    }
    return sum;
  }, 0)
}

/**
 * Solves the second part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the second part.
 */
function solvePart2(rawInput) {
  const equations = getEquations(rawInput);
  return equations.reduce((sum, equation) => {
    const isValid = isValidEquation(equation);
    const isValidConcat = isValidEquationFix(equation);
    if (isValid || isValidConcat) {
      return sum + equation.leftParts[0];
    }
    return sum;
  }, 0)
}

console.log("Part 1:", solvePart1(rawInput));
console.log("Part 2:", solvePart2(rawInput));

module.exports = { solvePart1, solvePart2 };
