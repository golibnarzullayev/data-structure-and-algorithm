// Function to reverse the string in place
function reverseString(s) {
  let left = 0,
    right = s.length - 1;

  // Loop until the pointers meet in the middle
  while (left <= right) {
    // Swap the characters at the left and right pointers
    [s[left], s[right]] = [s[right], s[left]];

    // Move the pointers towards the center
    left += 1;
    right -= 1;
  }

  return s;
}
