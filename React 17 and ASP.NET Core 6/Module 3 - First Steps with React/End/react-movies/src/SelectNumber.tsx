export default function SelectNumber(props: selectNumberProps){
    const arr = Array(props.maxValue).fill(0);
    return (
        <select onChange={(e) => {
            console.log(e.currentTarget.value);
            props.onSelected(parseInt(e.currentTarget.value, 10));
        }}>
            {arr.map((_, index) => 
            <option key={index+1} value={index+1}>{props.selectContent(index+1)}</option>)}
        </select>
    )
}

interface selectNumberProps{
    maxValue: number;
    onSelected(value: number): void;
    selectContent(value: number): React.ReactNode;
}

SelectNumber.defaultProps = {
    maxValue: 5
}