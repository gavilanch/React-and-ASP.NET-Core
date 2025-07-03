import * as yup from "yup";
import firstLetterUppercase from "../../../validations/firstLetterUppercase";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../components/Button";
import { NavLink } from "react-router";
import Map from "../../../components/Map/Map";
import type Coordinate from "../../../components/Map/coordinate.model";
import DisplayErrors from "../../../components/DisplayErrors";
import type TheaterCreation from "../models/TheaterCreation.model";

export default function TheaterForm(props: TheaterFormProps){

    const {register, handleSubmit, setValue,
        formState: {errors, isValid, isSubmitting}
    } = useForm<TheaterCreation>({
        resolver: yupResolver(validationRules),
        mode: 'onChange',
        defaultValues: props.model ?? {name: ''}
    })

    function transformCoordinate(): Coordinate[] | undefined {
        if (props.model){
            const response: Coordinate = {
                lat: props.model.latitude,
                lng: props.model.longitude
            }

            return [response]
        }

        return undefined;
    }

    return (
        <>
            <DisplayErrors errors={props.errors} />
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" autoComplete="off" className="form-control" 
                        {...register('name')}
                    />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>

                <div className="mt-4">
                    <Map allowClicks={true} coordinates={transformCoordinate()} setCoordinate={coordinate => {
                        setValue('latitude', coordinate.lat, {
                            shouldValidate: true
                        })

                        setValue('longitude', coordinate.lng, {
                            shouldValidate: true
                        })
                    }} />
                </div>

                <div className="mt-2">
                    <Button
                        type="submit" disabled={!isValid || isSubmitting}
                    >{isSubmitting ? 'Sending...' : 'Send'}</Button>
                    <NavLink className="btn btn-secondary ms-2" to="/theaters">Cancel</NavLink>
                </div>
            </form>
        </>
    )

}

interface TheaterFormProps {
    model?: TheaterCreation;
    onSubmit: SubmitHandler<TheaterCreation>;
    errors: string[];
}

const validationRules = yup.object({
    name: yup.string().required('The name is required').test(firstLetterUppercase()),
    latitude: yup.number().required(),
    longitude: yup.number().required()
})