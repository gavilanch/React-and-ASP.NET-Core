export default function DynamicContent(props: DynamicContentProps){
    return (
        <div>
            {props.displayContent ? <p>Displaying the secret message</p> : undefined}
        </div>
    )
}

interface DynamicContentProps{
    displayContent: boolean;
}