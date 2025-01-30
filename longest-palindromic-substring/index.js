// Helper function to expand around the center and find the longest palindrome
function expand(s, i, j) {
  let n = s.length;

  // Expand outwards as long as the characters match
  while (i >= 0 && j < n && s[i] == s[j]) {
    i -= 1; // Move left
    j += 1; // Move right
  }

  // Return the palindrome substring
  return s.slice(i + 1, j);
}

// Main function to find the longest palindromic substring
function longestPalindrome(s) {
  let n = s.length;
  let answer = "";

  // Iterate through each character in the string
  for (let i = 0; i < n; i++) {
    // Check for both odd and even length palindromes centered at index i
    const oddPal = expand(s, i, i); // Odd length palindrome
    const evenPal = expand(s, i, i + 1); // Even length palindrome

    // Update the answer with the longest palindrome found
    answer = [answer, oddPal, evenPal].reduce((curr, acc) =>
      acc.length > curr.length ? acc : curr
    );
  }

  // Return the longest palindromic substring
  return answer;
}
