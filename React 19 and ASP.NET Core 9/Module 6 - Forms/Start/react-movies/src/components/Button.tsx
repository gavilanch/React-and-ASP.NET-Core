export default function Button(props: ButtonProps){
    return (
        <button 
        onClick={props.onClick}
        type="button" className="btn btn-primary">{props.children}</button>
    )
}

interface ButtonProps{
    children: React.ReactNode;
    onClick(): void;
}