const fs = require('fs');
const path = require('path');

/**
 * Reads an input file from the specified path.
 * @param {string} relativePath - Relative path to the input file.
 * @returns {string} - The file content as a string.
 */
function readInput(relativePath) {
    const fullPath = path.resolve(__dirname, relativePath);
    return fs.readFileSync(fullPath, 'utf-8');
}

/**
 * Converts a string into an array of numbers.
 * @param {string} input - The content of the input file.
 * @returns {number[]} - An array of numbers.
 */
function parseNumbers(input) {
    return input.split('\n').map(line => parseInt(line, 10)).filter(n => !isNaN(n));
}

/**
 * Converts a string into an array of strings (lines).
 * @param {string} input - The content of the input file.
 * @returns {string[]} - An array of strings.
 */
function parseLines(input) {
    return input.split('\n').filter(line => line.trim() !== '');
}

module.exports = { readInput, parseNumbers, parseLines };
