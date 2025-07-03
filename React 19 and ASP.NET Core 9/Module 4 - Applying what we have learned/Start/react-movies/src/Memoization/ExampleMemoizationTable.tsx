import { useState } from "react";
import TableMemo from "./TableMemo";

export default function ExampleMemoizationTable(){

    const [text, setText] = useState('');

    return (
        <>

            <input onChange={e => setText(e.target.value)} />
            <p>
                The text is: {text}
            </p>

            <h3>Employees table</h3>
            <TableMemo />
        </>
    )
}