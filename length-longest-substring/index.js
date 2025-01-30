function lengthOfLongestSubstring(s) {
  const n = s.length;
  let pointer = 0;
  let result = 0;

  // Generate all substrings starting from each index
  while (pointer <= n) {
    let temp = "";
    let substr = s.slice(pointer, n);

    // Check for repeating characters in the substring
    for (let i = 0; i < substr.length; i++) {
      if (temp.includes(substr[i])) break;

      temp += substr[i];
    }

    pointer += 1;
    result = Math.max(result, temp.length);
  }

  return result;
}
