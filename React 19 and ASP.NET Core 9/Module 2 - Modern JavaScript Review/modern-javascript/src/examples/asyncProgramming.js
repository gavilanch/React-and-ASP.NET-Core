export function PromiseExample() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json().then(json => console.log(json)))
        .catch(err => console.log('there has been an error'));
}

export async function AsyncAwaitExample() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        debugger;
        console.log(json);
    }
    catch(err){
        console.log('there has been an error')
    }
   
}