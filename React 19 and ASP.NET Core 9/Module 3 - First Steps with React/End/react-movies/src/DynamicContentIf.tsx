export default function DynamicContentIf(props: DynamicContentIfProps){

    if (props.grade > 90){
        return (
            <div>
                <h3 style={{color: 'blue'}}>Excellent grade!</h3>
            </div>
        )
    } else if (props.grade >= 80 && props.grade <= 90){
        return (
            <div>
                <h3>Well done!</h3>
            </div>
        )
    } else {
        return (
            <h3>
                You can try again: <button>Try again</button>
            </h3>
        )
    }

}

interface DynamicContentIfProps{
    grade: number;
}