import { useState } from "react";
import type Person from "./person.model";
import Row from "./Row";

export default function Table(){
    const peopleSource: Person[] = [
        { id: 1, name: 'Felipe', department: 'Engineering' },
        { id: 2, name: 'Jessica', department: 'Human Resources' },
        { id: 3, name: 'Robert', department: 'Accounting' },
        { id: 4, name: 'Francisca', department: 'Accounting' },
        { id: 5, name: 'Joseph', department: 'Operations' },
        { id: 6, name: 'Estephany', department: 'Engineering' },
        { id: 7, name: 'Adam', department: 'Human Resources' }
    ]

    const [people, setPeople] = useState(peopleSource);

    function removePerson(person: Person){
        setPeople(currentPeople => currentPeople.filter(p => p.id !== person.id))
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {people.map(p => <Row key={p.id} person={p} remove={removePerson} />)}
            </tbody>
        </table>
    )
}