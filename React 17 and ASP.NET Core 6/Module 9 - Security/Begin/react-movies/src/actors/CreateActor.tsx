import { useState } from 'react'
import DisplayErrors from '../utils/DisplayErrors';
import ActorForm from './ActorForm'
import { actorCreationDTO } from './actors.model'
import {convertActorToFormData} from '../utils/formDataUtils';
import axios from 'axios';
import { urlActors } from '../endpoints';
import { useHistory } from 'react-router-dom';

export default function CreateActor(){

    const [errors, setErrors] = useState<string[]>([]);
    const history = useHistory();

    async function create(actor: actorCreationDTO){
        try{
            const formData = convertActorToFormData(actor);

            await axios({
                method: 'post',
                url: urlActors,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'}
            });
            history.push('/actors');
        }
        catch (error){
            if (error && error.response){
                setErrors(error.response.data);
            }
        }
    }

    return (
        <>
            <h3>Create Actor</h3>
            <DisplayErrors errors={errors} />
            <ActorForm model={{name: '', dateOfBirth: undefined}}
                onSubmit={async values => await create(values)}
            />
        </>
    )
}