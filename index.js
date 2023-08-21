// leve 1
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  return cleanedStr === cleanedStr.split("").reverse().join("");
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello"));//  false
console.log(isPalindrome("A man, a plan, a canal, Panama"));//  true



// level 2
function isEnhancedPalindrome(str) {
  const cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

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
