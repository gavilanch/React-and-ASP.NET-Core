import { useEntities } from "../../../hooks/useEntities";
import type Actor from "../models/Actor.model";
import IndexEntities from "../../../components/IndexEntities";

export default function IndexActors() {

    const actorsHook = useEntities<Actor>('/actors');

    return (
        <>
            <IndexEntities<Actor> title="Actors" url="/actors" urlCreate="/actors/create" entity="Actor"
                {...actorsHook} >
                {(entities, buildButtons) => <>

                    <thead className="table-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col" className="text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entities?.map(actor => <tr key={actor.id}>
                            <td>{actor.name}</td>
                            <td className="text-end">
                                {buildButtons(`/actors/edit/${actor.id}`, actor.id)}
                            </td>
                        </tr>)}
                    </tbody>

                </>}
            </IndexEntities>
        </>
    )
}