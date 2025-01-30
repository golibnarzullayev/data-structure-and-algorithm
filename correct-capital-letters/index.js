// Helper function to check if characters are within a given range (ASCII range)
function inRange(s, start, end) {
  for (let i = 0; i < s.length; i++) {
    let ord = s[i].charCodeAt();

    // If any character is outside the specified range, return false
    if (!(ord >= start && ord <= end)) {
      return false;
    }
  }

  return true;
}

// Function to check if a string contains only uppercase letters
function isUpper(s) {
  return inRange(s, 65, 90);
}

// Function to check if a string contains only lowercase letters
function isLower(s) {
  return inRange(s, 97, 122);
}

// Main function to detect correct capital use in a word
function detectCapitalUse(word) {
  // If all letters are uppercase or all are lowercase, return true
  if (isUpper(word) || isLower(word)) return true;

  // If the first letter is uppercase and the rest are lowercase, return true
  return isUpper(word[0]) && isLower(word.slice(1));
}
