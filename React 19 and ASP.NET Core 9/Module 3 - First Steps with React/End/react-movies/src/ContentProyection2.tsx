export default function ContentProyection2(props: ContentProyection2Props){

    return (
        <>
            {props.superiorPart}
            <hr />
            {props.middlePart}
            <hr />
            {props.inferiorPart}
        </>
    )

}

interface ContentProyection2Props{
    superiorPart: React.ReactNode;
    middlePart: React.ReactNode;
    inferiorPart: React.ReactNode;
}