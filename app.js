//1) getLongWords: Filter words longer than 4, uppercase them, return array.
let words = function (a) {
  if (!Array.isArray(a)) return "bu array emas";
  if (!a.length) return "array bosh ekan";
  return a.filter((a) => a.length > 4).map((a) => a.toUpperCase());
};
console.log(words(["cat", "dog", "mushuk", "kuchuk", "parot", "qush"]));
//3) getLastThree: Return last 3 elements using slice
let mevalar = ["Olma", "Nok", "Banan", "Apelsin", "Anor", "Uzum", "O'rik"];
let fruits = (fruit) => {
  return fruit.slice(-3);
};
console.log(fruits(mevalar));
//4) sortDescending: Sort numbers in descending order.
const numbers = [5, 2, 9, 1, 7, 3];
function number(num) {
  return num.sort((a, b) => b - a);
}
console.log(number(numbers));
// 5) addExclamation: Add '!' to each word.
function undov(undov) {
  return undov.map((item) => item + "!");
}
console.log(undov(["cat", "dog", "mushuk", "kuchuk", "parot", "qush"]));
//6) findFirstShort: Find first word with length < 3
let three = function (a) {
  return a.find((item) => item.length < 3);
};
console.log(three(["cat", "dog", "mushuk", "kuchuk", "parot", "qush", "va"]));
//7) checkIncludes: Check if 'banana' exists.
function fruitNew(fruit) {
  return fruit.includes("Banan");
}
console.log(
  fruitNew(["Olma", "Nok", "Banan", "Apelsin", "Anor", "Uzum", "O'rik"]),
);
//8) getIndexes: Find first and last index of 'b'
let word = "abcbdbb";
console.log(word.indexOf("b"), word.lastIndexOf("b"));
//9) addAndRemove: Add 0 at start, remove last.
function remove(remove) {
  remove.unshift("maza");
  remove.pop();
  return remove;
}
console.log(remove(["cat", "dog", "mushuk", "kuchuk", "parot", "qush"]));
