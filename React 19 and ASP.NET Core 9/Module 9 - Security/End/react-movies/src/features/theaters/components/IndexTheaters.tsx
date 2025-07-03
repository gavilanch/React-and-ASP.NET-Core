import type Theater from "../models/Theater.model";
import IndexEntities from "../../../components/IndexEntities";
import { useEntities } from "../../../hooks/useEntities";

export default function IndexTheaters() {
    const theatersHook = useEntities<Theater>('/theaters');

    return (
        <>
            <IndexEntities<Theater> title="Theater" url="/theaters" urlCreate="/theaters/create" entity="Theater"
                {...theatersHook} >
                {(entities, buildButtons) => <>

                    <thead className="table-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col" className="text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entities?.map(theater => <tr key={theater.id}>
                            <td>{theater.name}</td>
                            <td className="text-end">
                                {buildButtons(`/theaters/edit/${theater.id}`, theater.id)}
                            </td>
                        </tr>)}
                    </tbody>

                </>}
            </IndexEntities>
        </>)
}