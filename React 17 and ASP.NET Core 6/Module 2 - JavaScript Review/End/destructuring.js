let person = {
  firstName: "Felipe",
  lastName: "Gavilán",
  age: 999,
  currentDate: new Date(),
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

const {firstName, lastName, age} = person;

// console.log(firstName2);

getAddress = () => {
    return {
        street: 'street 1',
        country: 'country 1',
        state: 'state 1'
    };
}

const {street, country} = getAddress();

printName = (person) => {
    console.log(person.firstName);
}

printName2 = ({firstName}) => {
    console.log(firstName);
}

// printName2(person);

const arr = [1,2,3,4];

const [first, second,,fourth] = arr;

console.log(second);