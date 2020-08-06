// Map 
const numbers = [4,56,78, 43,2];

// const result = numbers.map(function(element){
//   return  element* element;
// })


// const result = numbers.map(function(element, index, array){
//  console.log(element, index, array)
// })


// const result = numbers.map( x => x*x);
// console.log(result);

// Filter 
// const bigger = numbers.filter( x => x > 5);
// console.log(bigger);


const isThere = numbers.find( x => x > 5);
console.log(isThere);

