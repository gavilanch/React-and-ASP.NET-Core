import Grandfather from "./Grandfather";
import ValueContext from "./ValueContext";

export default function UseContextExample(){

    const message = 'This is a message from the UseContextExample component';

    return (
        <ValueContext.Provider value={message}>
            <Grandfather />
        </ValueContext.Provider>
    )
}