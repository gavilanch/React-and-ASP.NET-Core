import { memo, useCallback, useState } from "react";
import type Person from "../person.model";
import RowMemo from "./RowMemo";
import { ErrorBoundary } from "react-error-boundary";

 const TableMemo = memo(function TableMemo(){

    console.log('Rendering the TableMemo component');

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

    const removePerson = useCallback(function removePerson(person: Person){
        setPeople(currentPeople => currentPeople.filter(p => p.id !== person.id))
    }, []);

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
                {people.map(p => <ErrorBoundary key={p.id} 
                    fallback={<><tr><td colSpan={3} style={{color: 'red'}}>-- Error: {p.name} --</td></tr></>}
                >
                    <RowMemo  person={p} remove={removePerson} />
                </ErrorBoundary>)}
            </tbody>
        </table>
    )
})

export default TableMemo;