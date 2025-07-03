export default function Button(props: ButtonProps){
    return (
        <button type="button" className="btn btn-primary">{props.children}</button>
    )
}

interface ButtonProps{
    children: React.ReactNode;
}