# :abc: Anagram Kata :1234:

## Overview

Welcome to the Anagram Kata implementation! This JavaScript application serves as a practical reference for developers looking for a clear, well-structured, and straightforward solution for [Leetcode #438](https://leetcode.com/problems/find-all-anagrams-in-a-string).

---

## Implementation

**findAnagrams Function**
  * Input Validation:
    * Checks if either of the input strings is empty or null. If true, it returns an array containing 0.

  * Sliding Window Approach:
    * Two pointers (left and right) are initialized for the sliding window approach.
    * The targetCharCounts object is populated with characters from the target string.

  * Main Loop:
    * Iterates through the main string (s) using the sliding window approach, adjusting the count of characters needed to form an anagram based on the characters encountered.

  * Anagram Detection:
    * When all characters needed for an anagram are found, the left index is pushed into the output array (startingIndices).

  * Window Movement:
    * When the window size reaches the length of the target string, the window moves forward by increasing the left end.
    * The count of characters left behind is adjusted, and the left end of the window moves forward.

  * Output:
    * Returns the array containing the starting indices of anagrams.

---

## Usage

To use this implementation, follow these steps:

```bash
# Clone the repository
git clone https://github.com/AnthonyMazzie/AnagramKata.git

# Navigate to the project directory
cd AnagramKata

# Install dependencies (Jest)
npm i

# Run tests
npm run test
```

#### Note: The test script in the package.json file is defined as "jest --verbose --watchAll", providing detailed output and allowing for continuous test watching during development.