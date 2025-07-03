import type Person from "./person.model";

export default function Row(props: RowProps){

    return (
        <tr>
            <td>{props.person.name}</td>
            <td>{props.person.department}</td>
            <td><button onClick={() => props.remove(props.person)}>Remove</button></td>
        </tr>
    )

}

interface RowProps{
    person: Person;
    remove: (p: Person) => void;
}