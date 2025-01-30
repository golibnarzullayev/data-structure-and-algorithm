// Function to check if parentheses are valid
function isValid(s) {
  let balance = 0;

  // Loop through the string to check balance
  for (let i = 0; i < s.length; i++) {
    // Increment balance for opening parenthesis
    if (s[i] === "(") balance += 1;
    // Decrement balance for closing parenthesis
    else if (s[i] === ")") balance -= 1;

    // If balance goes negative, return false
    if (balance < 0) return false;
  }

  // Return true if balance is zero, false otherwise
  return balance === 0;
}
