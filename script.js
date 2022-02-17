function palindrome(str) {
  const alphanumeric = str
    .toLowerCase()
    .split("")
    .filter((char) => /[a-zA-Z0-9]/.test(char))
    .join("");

  for (let i = 0; i < Math.floor(alphanumeric.length / 2); i++) {
    if (alphanumeric[i] !== alphanumeric[alphanumeric.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("ssc"));
