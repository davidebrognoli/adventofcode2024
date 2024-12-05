const { solvePart1, solvePart2 } = require("../src/day5/index");

const input = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`

// Test for Part 1
test("Example case for Part 1", () => {
  expect(solvePart1(input)).toBe(143);
});

// Test for Part 2
test("Example case for Part 2", () => {
  expect(solvePart2(input)).toBe(123);
});
