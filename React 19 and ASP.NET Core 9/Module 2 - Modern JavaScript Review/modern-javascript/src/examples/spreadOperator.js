export default function spreadOperator(){
    // Example 1: Basic use of the spread operator with an array

    const sum = (v1, v2) => v1 + v2;

    const numbers = [2, 3];

    //const result = sum(numbers[0], numbers[1]);

    const result = sum(...numbers);
    // console.log(result);

    // Example 2: Expanding into another array

    const moreNumbers = [1, ...numbers]; // [1, 2, 3]
    const moreNumbers2 = [1, ...numbers, 4, 5] // [1, 2, 3, 4, 5]

    // console.log(moreNumbers2);

    // Example 3: Concatenating arrays

    const array1 = ['Felipe', 'Gavilán'];
    const array2 = ['Marrero'];

    const array3 = [...array1, ...array2]; // [Felipe, Gavilán, Marrero]

    // console.log(array3);

    // Example 4: Combinating destructuring and the spread operator

    const [first, ...rest] = moreNumbers2;

    // console.log('moreNumber2', moreNumbers2);
    // console.log('first', first);
    // console.log('rest', rest);

    // Example 5: Cloning an array

    const moreNumbers2Cloned = [...moreNumbers2];

    // console.log('moreNumber2', moreNumbers2);
    // console.log('cloned', moreNumbers2Cloned);
    // moreNumbers2.push(6);
    // console.log('moreNumber2', moreNumbers2);
    // console.log('cloned', moreNumbers2Cloned);

    // Example 6: Spread operator in objects

    const person = {
        name: 'Felipe',
        lastName: 'Gavilán'
    };

    const person2 = {
        ...person,
        age: 999,
        address: {
            country: 'DR',
            state: 'My state'
        }
    }

    // console.log(person2);

    // Example 7: clone objects

    const personCloned = {...person2};

    // Example 8: Rest elements while destructuring

    const {age, address, ...person3} = person2;

    console.log('age', age);
    console.log('address', address);
    console.log('person3', person3);

}