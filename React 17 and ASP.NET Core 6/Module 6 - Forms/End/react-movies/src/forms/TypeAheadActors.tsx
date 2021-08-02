import { ReactElement, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead'
import { actorMovieDTO } from '../actors/actors.model'

export default function TypeAheadActors(props: typeAheadActorsProps) {

    const actors: actorMovieDTO[] = [{
        id: 1, name: 'Felipe', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/220px-Tom_Holland_by_Gage_Skidmore.jpg'
    },
    {
        id: 2, name: 'Fernando', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/220px-Dwayne_Johnson_2%2C_2013.jpg'
    },
    {
        id: 3, name: 'Jessica', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Meryl_Streep_December_2018.jpg/220px-Meryl_Streep_December_2018.jpg'
    }]

    const selected: actorMovieDTO[] = [];

    const [draggedElement, setDraggedElement] = useState<actorMovieDTO | undefined>(undefined);

    function handleDragStart(actor: actorMovieDTO){
        setDraggedElement(actor);
    }

    function handleDragOver(actor: actorMovieDTO){
        if (!draggedElement){
            return;
        }

        if (actor.id !== draggedElement.id){
            const draggedElementIndex = props.actors.findIndex(x => x.id === draggedElement.id);
            const actorIndex = props.actors.findIndex(x => x.id === actor.id);

            const actors = [...props.actors];
            actors[actorIndex] = draggedElement;
            actors[draggedElementIndex] = actor;
            props.onAdd(actors);
        }
    }

    return (
        <div className="mb-3">
            <label>{props.displayName}</label>
            <Typeahead
                id="typeahead"
                onChange={actors => {
                    
                    if (props.actors.findIndex(x => x.id === actors[0].id) === -1){
                        props.onAdd([...props.actors, actors[0]]);
                    }

                    console.log(actors);
                }}
                options={actors}
                labelKey={actor => actor.name}
                filterBy={['name']}
                placeholder="Write the name of the actor..."
                minLength={1}
                flip={true}
                selected={selected}
                renderMenuItemChildren={actor => (
                    <>
                        <img alt="actor" src={actor.picture} 
                            style={{
                                height: '64px',
                                marginRight: '10px',
                                width: '64px'
                            }}
                        />
                        <span>{actor.name}</span>
                    </>
                )}
            />

            <ul className="list-group">
                {props.actors.map(actor => <li 
                key={actor.id}
                    draggable={true}
                    onDragStart={() => handleDragStart(actor)}
                    onDragOver={() => handleDragOver(actor)}
                    className="list-group-item list-group-item-action"
                >
                    {props.listUI(actor)} 
                    <span className="badge badge-primary badge-pill pointer text-dark"
                    style={{marginLeft: '0.5rem'}}
                    onClick={() => props.onRemove(actor)}
                    >X</span>
                    </li>)}
            </ul>
        </div>
    )
}

interface typeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
    onAdd(actors: actorMovieDTO[]): void;
    onRemove(actor: actorMovieDTO): void;
    listUI(actor: actorMovieDTO): ReactElement;
}