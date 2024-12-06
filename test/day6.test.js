const { solvePart1, solvePart2 } = require("../src/day6/index");

const input = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`

// Test for Part 1
test("Example case for Part 1", () => {
  expect(solvePart1(input)).toBe(41);
});

// Test for Part 2
test("Example case for Part 2", () => {
  expect(solvePart2(input)).toBe(6);
});
