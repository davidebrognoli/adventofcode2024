const { solvePart1, solvePart2 } = require("../src/day10/index");

const input = `89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`

// Test for Part 1
test("Example case for Part 1", () => {
  expect(solvePart1(input)).toBe(36);
});

// Test for Part 2
test("Example case for Part 2", () => {
  expect(solvePart2(input)).toBe(81);
});
