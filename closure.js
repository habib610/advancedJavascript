function closure(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
    
}
const num1 = closure();
const num2 = closure();
console.log(num1());
console.log(num2());
console.log(num1());
console.log(num2());
console.log(num1());
console.log(num2());
console.log(num2());