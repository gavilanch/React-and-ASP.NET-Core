let lastname = "Gavilán";
lastname = "Marrero";
let age = 999;
let date = new Date();

let propertyName = 'country';
let propertyValue = 'Mexico';

let person = {
    [propertyName]: propertyValue,
    lastname,
    age,
    date: new Date(),
    normalFunction(){
        // ...
    },
    arrowFunction: () => {
        // ...
    }
}

console.log(person.age);
person.normalFunction();
person.arrowFunction();
console.log(person[propertyName]);

returnValueFromPerson = (prop) => person[prop];

console.log(returnValueFromPerson('lastname'));
