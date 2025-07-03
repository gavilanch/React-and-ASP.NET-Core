export default function DisplayText({message}: DisplayTextProps) {
    return (
        <div>
            {message}
        </div>
    )
}

interface DisplayTextProps {
    message: string;
}