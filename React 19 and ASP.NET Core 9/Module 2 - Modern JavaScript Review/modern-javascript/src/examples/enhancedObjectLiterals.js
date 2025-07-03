export default function enhancedObjectLiterals(){
    let lastName = 'Gavilán';
    let age = 999;
    let date = new Date();

    const countryProp = 'country';
    const countryValue = 'DR';

    let person = {
        name: 'Felipe',
        lastName,
        age,
        date,
        regularFunction(){},
        arrowFunction: () => {},
        [countryProp]: countryValue
    };

    const returnValuesFromPerson = prop => person[prop]

    const value = returnValuesFromPerson('lastName');
    console.log(value);
}