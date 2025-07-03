import { useContext } from "react"
import ValueContext from "./ValueContext"

export default function Child(){

    const value = useContext(ValueContext);

    return (
        <>
            <h3>This is the Child component</h3>
            <h4>The message is: {value}</h4>
        </>
    )
}