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
