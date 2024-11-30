const { parseNumbers } = require('../src/utils');
const { solvePart1, solvePart2 } = require('../src/day1/index');

// Test for Part 1
test('Example case for Part 1', () => {
    // Input for the test case
    const input = parseNumbers('100');

    // Expecting the length of the input array
    expect(solvePart1(input)).toBe(1);
});

// Test for Part 2
test('Example case for Part 2', () => {
    // Input for the test case
    const input = parseNumbers('100');

    // Expecting the length of the input array times 2
    expect(solvePart2(input)).toBe(2);
});
