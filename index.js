// leve 1
function isPalindrome(str) {
  // Remove non-alphanumeric Characters and convert characters from uppercase to lowercase
  const cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // check if the cleaned string is equal to its reverse
  return cleanedStr === cleanedStr.split("").reverse().join("");
}
console.log(isPalindrome("hello")); // false



// level 2
function isEnhancedPalindrome(str) {
  // Remove non-alphanumeric Characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // check if the cleaned string is equal to its reverse
  return cleanedStr === cleanedStr.split("").reverse().join("");
}
console.log(isEnhancedPalindrome("A man, a plan, a canal,Panama")); // true
console.log(isEnhancedPalindrome("Was it a car or a cat I saw?")); // true
console.log(isEnhancedPalindrome("123321")); // true
console.log(isEnhancedPalindrome("hello world")); // false


// level 3
function checkPalindrome(str) {
  // applying split, revere and join
  const reversedString = str.split("").reverse().join("");
  if (str === reversedString) return true;
  else return false;
}

result = checkPalindrome("civic");
if (result == true) {
  console.log("True");
} else {
  console.log("false");
}

result = checkPalindrome("ivicc");
if (result == true) {
  console.log("True");
} else {
  console.log("false");
}

result = checkPalindrome("hello");
if (result == true) {
  console.log("True2");
} else {
  console.log("false");
}
