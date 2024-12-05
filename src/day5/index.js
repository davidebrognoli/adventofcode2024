const { readInput, parseLines } = require("../utils");

// Read and parse the input
const rawInput = readInput("./day5/input.txt");

/**
 * Processes input lines to build rule maps and update lists.
 * @param {string[]} lines - Array of strings where each line is either a rule (e.g., "1|2") or an update (e.g., "1,2,3").
 * @returns {[Map<number, Set<number>>, Map<number, Set<number>>, number[][]]} -
 * Returns an array containing:
 * 1. A map of "next rules" where each key is a number and the value is a set of previous numbers.
 * 2. A map of "previous rules" where each key is a number and the value is a set of next numbers.
 * 3. An array of updates (each represented as an array of numbers).
 */
function getDataFromLines(lines) {
  return lines.reduce((acc, line) => {
    const [prevRules, nextRules, updates] = acc;
    if (line.includes('|')){
      const [prev, next] = line.split("|").map(Number);
      if (!prevRules.has(next)) {
        prevRules.set(next, new Set());
      }
      prevRules.get(next).add(prev);
      if (!nextRules.has(prev)) {
        nextRules.set(prev, new Set());
      }
      nextRules.get(prev).add(next);
    } else {
      const update = line.split(",").map(Number);
      updates.push(update);
    }
    return [prevRules, nextRules, updates];
  }, [new Map(), new Map(), []]);
}

/**
 * Checks if an update satisfies the constraints defined by the rule maps.
 * @param {number[]} update - Array of numbers representing the update to validate.
 * @param {Map<number, Set<number>>} prevRules - Map of "previous rules" (number -> set of valid previous numbers).
 * @param {Map<number, Set<number>>} nextRules - Map of "next rules" (number -> set of valid next numbers).
 * @returns {boolean} - True if the update is valid, otherwise false.
 */
function isValidUpdate(update, prevRules, nextRules) {
  return update.every((num, index) => {
    const prev = update.slice(0, index);
    const next = update.slice(index + 1);
    const everyPrev  = prev.every((p) => {
      return !nextRules.has(p) || (nextRules.has(p) && nextRules.get(p).has(num));
    });
    const everyNext = next.every((n) => {
      return !prevRules.has(n) || (prevRules.has(n) && prevRules.get(n).has(num))
    });
    return everyPrev && everyNext;
  })
}

/**
 * Calculates the sum of the middle elements from each update in a list.
 * @param {number[][]} updateList - Array of updates, each represented as an array of numbers.
 * @returns {number} - The total sum of the middle elements.
 */
function sumMiddle(updateList) {
  return updateList.reduce((sum, update) => {
    const middleIndex = Math.floor(update.length / 2);
    const middle = update[middleIndex];
    return sum + middle;
  }, 0);
}

/**
 * Solves the first part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the first part.
 */
function solvePart1(rawInput) {
  const lines = parseLines(rawInput);
  const [prevRules, nextRules, updates] = getDataFromLines(lines);
  const validUpdate = updates.filter((update) => {
    return isValidUpdate(update, prevRules, nextRules);
  })
  return sumMiddle(validUpdate);
}

/**
 * Solves the second part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the second part.
 */
function solvePart2(rawInput) {
  const lines = parseLines(rawInput);
  const [prevRules, nextRules, updates] = getDataFromLines(lines);
  const invalidUpdate = updates.filter((update) => {
    return !isValidUpdate(update, prevRules, nextRules);
  });
  const invalidUpdateReordered = invalidUpdate.map((update) => {
    update.sort((a, b) => {
      if (!nextRules.get(a) && !prevRules.get(b)){
        return 0;
      }
      const nextValid = nextRules.get(a) && nextRules.get(a).has(b);
      const prevValid = prevRules.get(b) && prevRules.get(b).has(a);
      return nextValid || prevValid ? -1 : 1;
    })
    return update;
  })
  return sumMiddle(invalidUpdateReordered);
}

console.log("Part 1:", solvePart1(rawInput));
console.log("Part 2:", solvePart2(rawInput));

module.exports = { solvePart1, solvePart2 };
