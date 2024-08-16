const fruits=["apple","banana", "grape", "orange", "lime"];
console.log(fruits);
// console  result ["apple","banana", "grape", "orange", "lime"]
console.log(fruits.pop());
//remove lime
console.log(fruits);
// console.log resutls [ 'apple', 'banana', 'grape', 'orange' ]

fruits.push("mango");
fruits.push("peach","strawberry")
//add new 
console.log(fruits)
// console results ['apple','banana', 'grape', 'orange','mango','peach','strawberry']
const fruit=fruits.slice(0,2);
// slicing array
console.log(fruit);
// console result  [ 'apple', 'banana' ]

const myFruits=fruits.slice(2,-1);
console.log(myFruits);
// console result [ 'grape', 'orange', 'mango', 'peach' ]
// fruits.splice(2,0, "bread");
// result [
//   'apple',
//   'banana',
//   'bread',
//   'grape',
//   'orange',
//   'mango',
//   'peach',
//   'strawberry'
// ]

fruits.splice(2,1, "bread");
// result
// [
//     'apple',
//     'banana',
//     'bread',
//     'grape',
//     'orange',
//     'mango',
//     'peach',
//     'strawberry'
//   ]
console.log(fruits);
//last element
fruits.pop();
//first element
fruits.shift()

console.log(fruits);
// result [ 'banana', 'bread', 'orange', 'mango', 'peach' ]
//puts things at the begining
fruits.unshift("kazzo");
console.log(fruits) 
// result [ 'kazzo', 'banana', 'bread', 'orange', 'mango', 'peach' ]