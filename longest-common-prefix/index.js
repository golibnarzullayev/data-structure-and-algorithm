function longestCommonPrefix(words) {
  // If the input array is empty, return an empty string
  if (!words.length) return "";

  // Start with the first word as the initial prefix
  let prefix = words[0];

  // Iterate through all the words in the array
  for (let i = 1; i < words.length; i++) {
    // While the current word doesn't start with the prefix
    while (!words[i].startsWith(prefix)) {
      // Reduce the prefix by one character
      prefix = prefix.slice(0, -1);

      // If the prefix becomes empty, return an empty string
      if (!prefix) return "";
    }
  }

  // Return the longest common prefix
  return prefix;
}
