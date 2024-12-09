const { readInput, parseNumbers } = require("../utils");

// Read and parse the input
const rawInput = readInput("./day9/input.txt");

function getBlocks(instructions) {
  let blocks = [];
  let isSpace = false;
  let index = 0;
  for (let i = 0; i < instructions.length; i++) {
    let next;
    if (isSpace) {
      next = Array(instructions[i]).fill('.');
    } else {
      next = Array(instructions[i]).fill(index);
      index++;
    }
    blocks = [...blocks, ...next];
    isSpace = !isSpace;
  }
  return blocks;
}

function moveFileBlocks(blocks) {
  let compactBlocks = [];
  let finalIndex = blocks.length - 1;
  for (let i = 0; i < blocks.length && i <= finalIndex; i++) {
    if (blocks[i] !== '.') {
      compactBlocks.push(blocks[i]);
    } else {
      let next = blocks[finalIndex];
      while(next === '.') {
        finalIndex--;
        next = blocks[finalIndex];
      }
      compactBlocks.push(blocks[finalIndex]);
      finalIndex--;
    }
  }
  return compactBlocks;
}

function calculateTotal(blocks) {
  return blocks.reduce((acc, curr, index) => {
    return acc + curr * index;
  }, 0);
}

/**
 * Solves the first part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the first part.
 */
function solvePart1(rawInput) {
  const instructions = parseNumbers(rawInput, '');
  const blocks = getBlocks(instructions);
  const compactBlocks = moveFileBlocks(blocks);
  const total = calculateTotal(compactBlocks);
  return total;
}

function getBlocks2(instructions) {
  const blocks = [];
  let isSpace = false;
  let index = 0;
  for (let i = 0; i < instructions.length; i++) {
    if (isSpace) {
      blocks.push({ id: ".", length: instructions[i] });
    } else {
      blocks.push({ id: index, length: instructions[i] });
      index++;
    }
    isSpace = !isSpace;
  }
  return [blocks, index]
}

function moveFileBlocks2(blocks, index) {
  let file;
  let free;
  for (let i = index - 1; i >= 0; i--) {
    file = blocks.findIndex(block => block.id === i);
    free = blocks.findIndex(block => block.id === "." && block.length >= blocks[file].length);
    if (!blocks[free] || file < free) continue;
    if (blocks[free].length > blocks[file].length) {
      blocks = [ ...blocks.slice(0, free), { id: blocks[file].id, length: blocks[file].length }, { id: ".", length: blocks[free].length - blocks[file].length }, ...blocks.slice(free + 1) ];
      blocks[file + 1].id = ".";
    } else {
      blocks[free].id = blocks[file].id;
      blocks[file].id = ".";
    }
  }
  return blocks;
}

function getChecksum2(blocks) {
  let block = 0, checksum = 0;
  for (let i = 0; i < blocks.length; i++) {
    for (let j = 0; j < blocks[i].length; j++) {
      if (blocks[i].id !== "."){
        checksum += block * blocks[i].id;
      }
      block++;
    }
  }
  return checksum;
}

/**
 * Solves the second part of the problem.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} - Result of the second part.
 */
function solvePart2(rawInput) {
  const input = parseNumbers(rawInput, '');
  const [blocks, index] = getBlocks2(input);
  const compactBlocks = moveFileBlocks2(blocks, index);
  const checksum = getChecksum2(compactBlocks);
  return checksum;
}

console.log("Part 1:", solvePart1(rawInput));
console.log("Part 2:", solvePart2(rawInput));

module.exports = { solvePart1, solvePart2 };
