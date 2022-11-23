/*
Is Unique: Implement an algo to determine if a string has all unique characters?
What if you cannot use additional data structures?

Input: String (assumed ASCII string)
Output: Boolean (whether A String Has All Unique Characters)

 */

function uniqueCharacters (string) {
  if (string.length > 256) {
    return false;
  }

  let usedLetters = '';

  for (let index = 0; index < string.length; index++) {
    if (usedLetters.includes(string[index])) {
      return false;
    } else {
      usedLetters = usedLetters.concat(string[index]);
    }
  }

  return true;

}


console.log(uniqueCharacters('abc'));
console.log(uniqueCharacters('aba'));
console.log(uniqueCharacters(' !"#$%&\'() * +, -./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\';'))




