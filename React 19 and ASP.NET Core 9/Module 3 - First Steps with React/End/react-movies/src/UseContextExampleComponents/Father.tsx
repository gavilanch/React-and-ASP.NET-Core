import { useContext } from "react";
import Child from "./Child";
import ValueContext from "./ValueContext";

export default function Father(){

    const value = useContext(ValueContext);

    return (
        <>
            <h3>This is the Father component: {value}</h3>
            <Child />
        </>
    )
}