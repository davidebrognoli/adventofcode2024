const { solvePart1, solvePart2 } = require("../src/day11/index");

const input = `125 17`

// Test for Part 1
test("Example case for Part 1", () => {
  expect(solvePart1(input)).toBe(55312);
});

// Test for Part 2
test("Example case for Part 2", () => {
  expect(solvePart2(input)).toBe(65601038650482);
});
