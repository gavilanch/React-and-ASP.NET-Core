import { useMemo, useState } from "react";

export default function MemoizationExample(){

    const [number, setNumber] = useState(1);
    const [name, setName] = useState("");

    const calculateFactorial = useMemo(function calculateFactorial(){
        console.log('calculating the factorial');
        let result = 1;

        for (let i = 1; i <= number; i++){
            result = result*i;
        }

        return result;
    }, [number])

    return (
        <>
            <p>Calculate the factorial of: <input type="number" 
            onChange={e => setNumber(Number(e.target.value))} /></p>

            <p>The factorial of {number} is {calculateFactorial}</p>

            <p>Name: <input type="text" onChange={e => setName(e.target.value)} /></p>

            <p>Hello, {name}</p>
        </>
    )
}