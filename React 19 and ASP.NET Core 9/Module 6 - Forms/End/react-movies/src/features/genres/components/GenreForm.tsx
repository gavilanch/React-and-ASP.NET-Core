import { useForm, type SubmitHandler } from "react-hook-form"
import type CreateGenre from "../models/CreateGenre.model"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink } from "react-router";
import Button from "../../../components/Button";
import firstLetterUppercase from "../../../validations/firstLetterUppercase";

export default function GenreForm(props: GenreFormProps) {

    const { register, handleSubmit,
        formState: { errors, isValid, isSubmitting }
    } = useForm<CreateGenre>({
        resolver: yupResolver(validationRules),
        mode: 'onChange',
        defaultValues: props.model ?? {name: ''}
    })

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input autoComplete="off" className="form-control" {...register('name')} />
                {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            <div className="mt-2">
                <Button type="submit" disabled={!isValid || isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send'}</Button>
                <NavLink className="btn btn-secondary ms-2" to="/genres">Cancel</NavLink>
            </div>
        </form>
    )
}

interface GenreFormProps {
    onSubmit: SubmitHandler<CreateGenre>;
    model?: CreateGenre
}

const validationRules = yup.object({
    name: yup.string().required('The name is required').test(firstLetterUppercase())
})