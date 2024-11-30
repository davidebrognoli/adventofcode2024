# Advent of Code 2024

This repository contains solutions for **Advent of Code 2024** challenges. Each day's solution is stored in its own folder under `src/dayX/`.

## Setup

### 1. Clone the repository

To clone the repository, run:

`git clone https://github.com/davidebrognoli/adventofcode2024`

Then navigate into the project folder:

`cd advent-of-code2024`

### 2. Install dependencies

To install the required dependencies, run:

`npm install`

This will install Jest for testing and any other dependencies required for the challenges.

## Running the code

You can execute the solution for each day by using the following command:

`npm start X`

Where `X` is the day number (e.g., `1` for Day 1, `2` for Day 2, and so on).

### Example:

To run the solution for **Day 1**, you can use:

`npm start 1`

This will execute the code in `src/day1/index.js`.

## Testing

To run the tests for the solutions, use Jest. You can run the tests with:

`npm test`

Alternatively, you can run specific tests with:

`npx jest <test-name>`

## Folder Structure
```
advent-of-code2024/
├── src/
│   ├── day1/
│   │   |── index.js         # Solution for Day 1
|   |   └── input.txt        # Input file for Day 1
│   ├── day2/
│   │   └── index.js         # Solution for Day 2
|   |   └── input.txt        # Input file for Day 2
│   |── ...
│   ├── utils.js             # Utility functions (e.g., input parsing)
├── run.js                   # Script to launch solutions for specific days
├── package.json             # Project configuration
├── test/
│   ├── day1.test.js         # Jest tests for Day 1
│   └── ...
└── README.md                # This file
└── LICENSE                  # License
```

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
