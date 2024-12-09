const { solvePart1, solvePart2 } = require("../src/day9/index");

const input = `2333133121414131402`

// Test for Part 1
test("Example case for Part 1", () => {
  expect(solvePart1(input)).toBe(1928);
});

// Test for Part 2
test("Example case for Part 2", () => {
  expect(solvePart2(input)).toBe(2858);
});
