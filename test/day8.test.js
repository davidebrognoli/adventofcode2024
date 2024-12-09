const { solvePart1, solvePart2 } = require("../src/day8/index");

const input = `............
........0...
.....0......
.......0....
....0.......
......A.....
............
............
........A...
.........A..
............
............`

// Test for Part 1
test("Example case for Part 1", () => {
  expect(solvePart1(input)).toBe(14);
});

// Test for Part 2
test("Example case for Part 2", () => {
  expect(solvePart2(input)).toBe(34);
});