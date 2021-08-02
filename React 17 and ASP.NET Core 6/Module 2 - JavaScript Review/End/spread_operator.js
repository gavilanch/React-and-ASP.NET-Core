// example 1:

const sum = (a, b) => a + b;

const numbers = [2, 3];

// console.log(sum(...numbers));

// example 2:

const moreNumbers = [1, ...numbers]; // [1, 2, 3]
const moreNumber2 = [1, numbers]; // [1, [2, 3]]
const moreNumbers3 = [1, ...numbers, 4, 5]; // [1,2,3,4,5];

// example 3:

const otherNumbers = [4, 5];
const concatenatedArrays = [...numbers, ...otherNumbers]; // [2,3,4,5]

// example 4:

const [first, ...theRemainingValues] = concatenatedArrays;
// console.log(first); // 2
// console.log(theRemainingValues); // [3,4,5]

// example 5:

const concatenatedArraysCloned = [...concatenatedArrays];

// example 6:

const person = {
    name: 'Felipe',
    lastname: 'Gavilán'
};

const person2 = {
    ...person,
    age: 999
}

// console.log(person2);

// example 7

const person3 = {...person2};
person3.name = 'Scott';

// console.log(person2);
// console.log(person3);

// example 8

const {age, ...person4} = person3;

console.log(age);
console.log(person4);

