const array = [1,2, 3, 4,5 ,6, 7];
const peace = array.slice(1, -1);
console.log(peace);

const part = array.splice(1,4, 11,22,33,44);
console.log(part);
console.log(array);

const together = array.join("-_-");
console.log(together);