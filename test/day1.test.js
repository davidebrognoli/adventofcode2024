const { parseLines } = require("../src/utils");
const { solvePart1, solvePart2 } = require("../src/day1/index");

const testInput = `3   4
4   3
2   5
1   3
3   9
3   3`

// Test for Part 1
test("Example case for Part 1", () => {
  const input = parseLines(testInput);
  expect(solvePart1(input)).toBe(11);
});

// Test for Part 2
test("Example case for Part 2", () => {
  const input = parseLines(testInput);
  expect(solvePart2(input)).toBe(31);
});
