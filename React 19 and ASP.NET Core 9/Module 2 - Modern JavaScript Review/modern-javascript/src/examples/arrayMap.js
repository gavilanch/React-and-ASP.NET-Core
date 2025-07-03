export default function MapExample(){
    // Example 1: Squaring numbers

    const numbers = [1, 2, 3, 4, 5];
    const numbersSquared = numbers.map(value => value * value);

    // console.log(numbers);
    // console.log(numbersSquared);

    // Example 2: Extracting a property of several objects

    const people = [
        {id: 1, name: 'Felipe', country: 'DR'},
        {id: 2, name: 'Claudia', country: 'Mexico'},
        {id: 3, name: 'Robert', country: 'US'}
    ]

    const ids = people.map(value => value.id);
    const countriesAndNames = people.map(person => {
        return {
            name: person.name,
            country: person.country
        }
    })

    // console.log(ids);
    // console.log(countriesAndNames);

    // Example 3: Transforming data into UI


    /*
        <li>1</li>
        <li>2</li>
        <li>3</li>
        ...
    */

    const listItems = numbers.map(value => `<li>${value}</li>`);

    const list = `
    
    <ul>
    ${listItems.join("")}
    </ul>
    
    `

    console.log(list);
    return list;

}