import { useEffect, useState } from "react"

export default function UseEffectExamples() {

    const [clicks, setClicks] = useState(0);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        console.log('updating the title');
        document.title = `${clicks} times`
    }, [clicks]);

    useEffect(() => {
        console.log('the component has loaded');

        return () => console.log('cleaning up resources')
    }, [])

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId)
    })

    return (
        <>
            <h3>Use effect examples</h3>

            <div>
                <button onClick={() => setClicks(c => c + 1)}>I have been clicked {clicks} times</button>
            </div>
            <div>
                The current time is: {time.toTimeString()}
            </div>
        </>
    )
}