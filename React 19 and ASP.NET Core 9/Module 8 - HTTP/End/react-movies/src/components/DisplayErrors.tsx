export default function DisplayErrors(props: DisplayErrorsProps){
    return (
        <>
            <ul className="error">
                {props.errors.map(err => <li key={err}>{err}</li>)}
            </ul>
        </>
    )
}

interface DisplayErrorsProps{
    errors: string[];
}