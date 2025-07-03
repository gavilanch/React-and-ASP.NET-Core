export default function templateStringsExample(){
    const name = 'Felipe Gavilán'; // single quotes
    const country = "DR"; // double quotes

    const greet = "Hello, " + name + ", how are you?"; // Hello, Felipe Gavilán, how are you?

    const greet2 = `Hello, ${name}, how are you?`; // backticks

    // console.log(greet2);

    const sum = (v1, v2) => v1 + v2;

    const message = `Hello, ${name}
    
This is a letter.

The sum of 2 and 3 is ${sum(2, 3)}

Kind regards, `;

    console.log(message);
}