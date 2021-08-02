let duplicate = function(value){
    //this
    return value * 2;
}

let duplicate_arrow = value => value * 2;

let duplicate_arrow2 = value => {
    return value * 2;
}

let printSomething = () => console.log('something')

let addition = (value1, value2) => value1 + value2;

let complexFunction = () => {
    //this
    // line 1;
    // line 2;
    // ...
}

// console.log(duplicate_arrow(3));

const obj = {
    traditionalFunction: function (){
        console.log('traditional function', this);
    },
    arrowFunction: () => {
        console.log('arrow function', this);
    },
    lastName: 'Gavilán'
};

console.log('this environment', this);
obj.traditionalFunction();
obj.arrowFunction();