const { parseLines } = require("../src/utils");
const { solvePart1, solvePart2 } = require("../src/day2/index");

const testInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

// Test for Part 1
test("Example case for Part 1", () => {
  const input = parseLines(testInput);
  expect(solvePart1(input)).toBe(2);
});

// Test for Part 2
test("Example case for Part 2", () => {
  const input = parseLines(testInput);
  expect(solvePart2(input)).toBe(4);
});
