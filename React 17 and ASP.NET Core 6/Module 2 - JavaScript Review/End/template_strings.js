const myname = 'Felipe Gavilán'; // Single quotes
const country = "Dominican Republic"; // double quotes

const greeting = "Hello, " + myname + ", how are you?";

const greeting2 = `Hello, ${myname}, how are you?` // backticks

const add = (a,b) => a+b;

const message = `Hello, ${myname}

This is a message for you.

The sum of 2 and 2 is ${add(2,2)}

Bye bye`;

console.log(message);