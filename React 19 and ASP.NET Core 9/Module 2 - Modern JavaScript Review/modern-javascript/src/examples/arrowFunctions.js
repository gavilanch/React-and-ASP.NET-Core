function double(value) {
    return value * 2;
}

let myFunctionInAVariable = double;

let myArrowFunction = (value) => {
    return value * 2;
}

export let mySmallArrowFunction = value => value * 2;

//console.log(mySmallArrowFunction(4)) // 8

let sum = (v1, v2) => v1 + v2;

sum(2, 3); // 5

let logSomething = () => console.log('test');

// logSomething();

function executeAFunction(f){
    console.log('--before the function--');
    f();
    console.log('--after the function--');
}

// executeAFunction(logSomething);

executeAFunction(() => console.log('this is my arrow function'));