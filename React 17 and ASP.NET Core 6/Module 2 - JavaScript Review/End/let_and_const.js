let firstName = 'Felipe'
const lastName = 'Gavilán';
// lastName = 'Marrero'; // assignment operation

let age = 999;
let birthDate = new Date();

let person = {
    firstName: 'Eduardo',
    lastName: 'Williams'
}

let duplicate = function(value){
    return value * 2;
}

const person2 = {
    firstName: 'Scott',
    lastName: 'Brown'
}

person2.firstName = 'Alex'; // we are not reassigning person2

person2 = {

} // can't do this

console.log(person2);