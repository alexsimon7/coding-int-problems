/*
Given two strings, write a method to decide if one is a permutation of the other

Input: two strings (assume ASCII)
Output: boolean

 */
function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(checkPermutation('abc', 'abcd')) // expect false
console.log(checkPermutation('abc', 'bca')); // expect true
console.log(checkPermutation('abc', 'bcd')); // expect false
console.log(checkPermutation('bbb', 'bbb')); // expect true
console.log(checkPermutation('aba', 'baa')); // expect true
console.log(checkPermutation('Abc', 'Cba')); // expect false
console.log(checkPermutation('Abc', 'cbA')); // expect true
console.log(checkPermutation(' abc', 'cba ')); // expect true
console.log(checkPermutation('  abc', 'abc ')); //expect false