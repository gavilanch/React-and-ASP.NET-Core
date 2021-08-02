import "./CSSExamples.css" // local

export default function CSSExamples(){

    const blueSquare = {
        backgroundColor: 'blue', 
        height: '50px', 
        width: '50px', 
        marginLeft: '1rem'}

    return (
        <>
            <h1 className="red">CSS Examples</h1>
            <h2 className="primary-color">Something</h2>
            <div style={{
                backgroundColor: 'green', 
                height: '50px', 
                width: '50px', 
                marginLeft: '1rem'}}></div>

            <div style={blueSquare}></div>
        </>
    )
}