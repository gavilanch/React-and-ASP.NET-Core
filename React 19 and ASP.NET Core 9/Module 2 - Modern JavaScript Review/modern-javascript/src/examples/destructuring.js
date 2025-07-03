export default function destructureExample(){
    let person = {
        name: 'Felipe',
        lastName: 'Gavilán',
        age: 999,
        date: new Date()
    };

    // Example 1: Destructuring the properties of an object

    // const name = person.name;
    // const lastName = person.lastName;
    // const age = person.age;

    // const {name, lastName, age} = person;

    // console.log(name, lastName, age);

    // Example 2: Destructuring the return value of a function

    const getAddress = () => {
        return {
            street: 'My street',
            country: 'My country',
            state: 'My state'
        };
    }

    // const {country, state} = getAddress();

    // console.log(country, state);

    // Example 3: Destructuring the parameter of a function

    const printName = person => {
        console.log(person.name);
    }

    const printNameWithDestructuring = ({name}) => {
        console.log(name);
    }

    // printName(person);
    // printNameWithDestructuring(person);

    // Example 4: Destructuring an array

    const numbers = [1, 2, 3, 4];

    const [first, second, , fourth] = numbers;

    // console.log(first, second, fourth);

    // Example 5: Destructuring an array that is the return value of a function

    const functionThatReturnsAnArray = () => {
        return ['Felipe', 'Gavilán'];
    }

    const [name, lastName] = functionThatReturnsAnArray();

    console.log(name, lastName);

}