export default function ternaryOperatorExamples(){
    const age = 27;

    // let message;

    // if (age >= 18){
    //     message = 'You shall pass';
    // } else {
    //     message = 'You shall not pass';
    // }

    // boolean-expression ? execute-if-true : execute-if-false
    const message = (age >= 18) ? 'You shall pass' : 'You shall not pass';

    console.log(message);
}