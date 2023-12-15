/**
 * Function returns an array of all start indices of p's Anagrams in s.
 */
const findAnagrams = (mainString, targetString) => {
  // Check if either of the strings is empty or null
  if (
    mainString === "" ||
    mainString === null ||
    targetString === "" ||
    targetString === null
  ) {
    // If true, return an array containing 0
    return [0];
  }

  // Initialize an array to store the output (starting indices of anagrams)
  const startingIndices = [];

  // Create an object to store the characters in the targetString and their counts
  const targetCharCounts = {};

  // Populate the targetCharCounts object with characters from targetString and their counts
  for (let char of targetString) {
    // If the character is already in the object, increment its count
    if (char in targetCharCounts) {
      targetCharCounts[char]++;
    } else {
      // If the character is not in the object, add it with a count of 1
      targetCharCounts[char] = 1;
    }
  }

  // Initialize two pointers for the sliding window approach
  let left = 0; // Left end of the window
  let right = 0; // Right end of the window

  // Initialize a count of characters needed to form an anagram
  let charactersNeeded = targetString.length;

  // Start sliding the window through the mainString
  while (right < mainString.length) {
    // If the current character in mainString is needed for an anagram (its count is positive),
    // decrease the count of characters needed
    if (targetCharCounts[mainString[right]] > 0) {
      charactersNeeded--;
    }

    // Decrease the count of the needed character and move the right end of the window forward
    targetCharCounts[mainString[right]]--;
    right++;

    // If all characters needed for an anagram are found (count is 0), push the left index into the output array
    if (charactersNeeded === 0) {
      startingIndices.push(left);
    }

    // When the window size reaches the length of targetString, move the window forward by increasing the left end
    if (right - left === targetString.length) {
      // If the character left behind was originally a needed character, increase the count
      if (targetCharCounts[mainString[left]] >= 0) {
        charactersNeeded++;
      }

      // Increment the count of the character left behind and move the left end of the window forward
      targetCharCounts[mainString[left]]++;
      left++;
    }
  }

  // Return the array containing the starting indices of anagrams
  return startingIndices;
};

/**
 * Function to determine if two strings are Anagrams (Extra, not used above)
 */
function isAnagram(str1, str2) {
  // Convert both input strings to lowercase
  let str1_lower = str1.toLowerCase();
  let str2_lower = str2.toLowerCase();

  // Remove spaces from both lowercase strings
  let str1_lower_nospaces = str1_lower.replace(/\s/g, "");
  let str2_lower_nospaces = str2_lower.replace(/\s/g, "");

  // Sort the characters of the strings after removing spaces
  let str1_lower_sorted = str1_lower_nospaces.split("").sort().join("");
  let str2_lower_sorted = str2_lower_nospaces.split("").sort().join("");

  // Check if the sorted strings are equal (Anagrams)
  if (str1_lower_sorted === str2_lower_sorted) {
    // Anagrams - return true
    return true;
  }

  // Not Anagrams - return false
  return false;
}

module.exports = { isAnagram, findAnagrams };
