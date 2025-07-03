import { Typeahead } from "react-bootstrap-typeahead";
import type MovieActor from "../models/MovieActor.model";
import type { Option } from "react-bootstrap-typeahead/types/types";
import { useState } from "react";

export default function TypeaheadActors(props: TypeaheadActorsProps){

    const actors: MovieActor[] = [
        {id: 1, name: 'Tom Holland', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/800px-Tom_Holland_by_Gage_Skidmore.jpg'},
        {id: 2, name: 'Samuel L. Jackson', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/SamuelLJackson.jpg/800px-SamuelLJackson.jpg'},
        {id: 3, name: 'Marisa Tomei', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Marisa_Tomei_at_Berlinale_2023.jpg/800px-Marisa_Tomei_at_Berlinale_2023.jpg'}
    ]

    const selection: MovieActor[] = [];

    const [draggedElement, setDraggedElement] = useState<MovieActor | undefined>(undefined);

    function handleDragStart(actor: MovieActor){
        setDraggedElement(actor);
    }

    function handleDragOver(actor: MovieActor){
        if (!draggedElement || actor.id === draggedElement.id) return;

        const actors = [...props.actors];
        const fromIndex = actors.findIndex(ca => ca.id === draggedElement.id);
        const toIndex = actors.findIndex(ca => ca.id === actor.id);

        if (fromIndex !== -1 && toIndex !== -1){
            [actors[fromIndex], actors[toIndex]] = [actors[toIndex], actors[fromIndex]];
            props.onAdd(actors);
        }
    }

    return (
        <>
            <label>Actors</label>
            <Typeahead 

                onChange={(actors: Option[]) => {
                    const selectedActor = actors[0] as MovieActor;
                    if (props.actors.findIndex(ca => ca.id === selectedActor.id) === -1){
                        selectedActor.character = '';
                        props.onAdd([...props.actors, selectedActor]);
                    }
                }}

                options={actors}
                filterBy={['name']}
                labelKey={(option: Option) => {
                    const actor = option as MovieActor;
                    return actor.name;
                }}
                placeholder="Write the name of the actor..."
                minLength={2}
                selected={selection}
                flip={true}
                renderMenuItemChildren={(option: Option) => {
                    const actor = option as MovieActor;
                    return (
                        <>
                            <img alt="actor's image" src={actor.picture} 
                                style={{height: '64px', width: '64px', marginRight: '10px'}}
                            />
                            <span>{actor.name}</span>
                        </>
                    )
                }}
            />

            <ul className="list-group">
                {props.actors.map(actor => <li 
                draggable={true}
                onDragStart={() => handleDragStart(actor)}
                onDragOver={() => handleDragOver(actor)}
                key={actor.id}
                className="list-group-item d-flex align-items-center"
                >
                    <div style={{width: '70px'}}>
                        <img alt="picture" style={{height: '60px'}} src={actor.picture} />
                    </div>

                    <div style={{width: '150px', marginLeft: '1rem'}}>
                        {actor.name}
                    </div>

                    <div className="flex-grow-1 mx-3">
                        <input className="form-control" placeholder="Character"
                            value={actor.character}
                            onChange={e => props.onCharacterChange(actor.id, e.currentTarget.value)}
                        />
                    </div>

                    <span role="button"
                    className="badge text-bg-secondary"
                    onClick={() => props.onRemove(actor)}
                    >
                        X
                    </span>
                </li>)}
            </ul>
        </>
    )
}

interface TypeaheadActorsProps {
    actors: MovieActor[];
    onAdd(actors: MovieActor[]): void;
    onRemove(actor: MovieActor): void;
    onCharacterChange(id: number, character: string): void
}