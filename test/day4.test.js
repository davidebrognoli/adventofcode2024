const { solvePart1, solvePart2 } = require("../src/day4/index");

const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`

// Test for Part 1
test("Example case for Part 1", () => {
  expect(solvePart1(input)).toBe(18);
});

// Test for Part 2
test("Example case for Part 2", () => {
  expect(solvePart2(input)).toBe(9);
});
