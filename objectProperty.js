const empty = [];

const number = [
    {name: "habib", id: 23, roll: 34},
    {name: "rakib", id: 63, roll: 54},
    {name: "rahman", id: 44, roll: 89},
]
for (let i = 0; i < number.length; i++){
    empty.push(number[i].name)
}

console.log(...empty);