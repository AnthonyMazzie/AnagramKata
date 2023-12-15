const { isAnagram, findAnagrams } = require("../anagram");

describe("Find All Anagrams in a String", () => {
  test('Example 1: "cbaebabacd" and "abc"', () => {
    const s = "cbaebabacd";
    const p = "abc";
    const result = findAnagrams(s, p);
    expect(result).toEqual(expect.arrayContaining([0, 6]));
    expect(result.length).toBe(2);
  });

  test('Example 2: "abab" and "ab"', () => {
    const s = "abab";
    const p = "ab";
    const result = findAnagrams(s, p);
    expect(result).toEqual(expect.arrayContaining([0, 1, 2]));
    expect(result.length).toBe(3);
  });

  test("Additional Test: Empty strings", () => {
    const s = "";
    const p = "";
    const result = findAnagrams(s, p);
    expect(result).toEqual(expect.arrayContaining([0]));
    expect(result.length).toBe(1);
  });

  test("Additional Test: No anagrams", () => {
    const s = "xyz";
    const p = "abc";
    const result = findAnagrams(s, p);
    expect(result).toEqual([]);
  });
});

describe("Basic Anagram Tests", () => {
  it("Detects Anagrams", () => {
    expect(isAnagram("happy", "yhapp")).toBe(true);
    expect(isAnagram("listen", "silent")).toBe(true);
    expect(isAnagram("rail safety", "fairy tales")).toBe(true);
  });

  it("Detects Non-Anagrams", () => {
    expect(isAnagram("hello", "world")).toBe(false);
    expect(isAnagram("abc", "def")).toBe(false);
  });

  it("Handles Different Letter Cases", () => {
    expect(isAnagram("Hello", "oLlEh")).toBe(true);
    expect(isAnagram("Tea", "Eat")).toBe(true);
  });

  it("Ignores Spaces", () => {
    expect(isAnagram("astronomer", "moon starer")).toBe(true);
    expect(isAnagram("debit card", "bad credit")).toBe(true);
  });

  it("Handles Empty Strings", () => {
    expect(isAnagram("", "")).toBe(true);
    expect(isAnagram("", "nonempty")).toBe(false);
  });

  it("Handles Different Lengths", () => {
    expect(isAnagram("abcd", "abcde")).toBe(false);
  });
});
