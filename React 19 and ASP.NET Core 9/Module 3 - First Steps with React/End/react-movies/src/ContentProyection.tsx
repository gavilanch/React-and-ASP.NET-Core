export default function ContentProyection(props: ContentProyectionProps){
    return (
        <>
            <h3>Superior part</h3>
            {props.children}
            <h3>Inferior part</h3>
        </>
    )
}

interface ContentProyectionProps{
    children: React.ReactNode
}