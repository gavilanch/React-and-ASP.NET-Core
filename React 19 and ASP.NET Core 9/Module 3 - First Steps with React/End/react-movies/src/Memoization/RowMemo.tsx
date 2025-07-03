import { memo } from "react";
import type Person from "../person.model";

 const RowMemo = memo(function RowMemo(props: RowProps){

    console.log(`Loading the row of ${props.person.name}`);

    if (props.person.name === 'Robert'){
        throw Error();
    }

    return (
        <tr>
            <td>{props.person.name}</td>
            <td>{props.person.department}</td>
            <td><button onClick={() => props.remove(props.person)}>Remove</button></td>
        </tr>
    )

});

interface RowProps{
    person: Person;
    remove: (p: Person) => void;
}

export default RowMemo