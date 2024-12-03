const { solvePart1, solvePart2 } = require("../src/day3/index");

// Test for Part 1
test("Example case for Part 1", () => {
  const input =
    "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
  expect(solvePart1(input)).toBe(161);
});

// Test for Part 2
test("Example case for Part 2", () => {
  const input =
    "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
  expect(solvePart2(input)).toBe(48);
});
