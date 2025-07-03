export default function variablesExamples(){
    let lastName = 'Gavilán';
    lastName = 'Marrero';
    let age = 999;
    let today = new Date();
    let person = {
        name: 'Felipe',
        lastName: 'Gavilán',
        age: 999,
        todaysDate: new Date()
    }

    let myFunction = function double(value){
        return value * 2;
    }

    for (let x = 1; x <= 10; x++){
        // ...
    }

    // console.log(x);

    const country = 'DR';
    // country = 'US';

    const ingredients = ['Cheese', 'Ham'];
    // ingredients = ['Bacon'];
    ingredients.push('Bacon');

    console.log(ingredients);
}