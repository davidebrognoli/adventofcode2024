const { solvePart1, solvePart2 } = require("../src/day7/index");

const input = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`

// Test for Part 1
test("Example case for Part 1", () => {
  expect(solvePart1(input)).toBe(3749);
});

// Test for Part 2
test("Example case for Part 2", () => {
  expect(solvePart2(input)).toBe(11387);
});
