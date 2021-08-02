import { useContext, useEffect, useState } from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Ratings.css';
import AuthenticationContext from "../auth/AuthenticationContext";
import Swal from "sweetalert2";

export default function Ratings(props: ratingsProps){

    const [maximumValueArr, setMaximumValueArr] = useState<number[]>([]);
    const [selectedValue, setSelectedValue] = useState(props.selectedValue);
    const {claims} = useContext(AuthenticationContext);

    useEffect(() => {
        setMaximumValueArr(Array(props.maximumValue).fill(0));
    }, [props.maximumValue])

    function handleMouseOver(rate: number){
        setSelectedValue(rate);
    }

    function handleClick(rate: number){
        const userIsLoggedIn = claims.length > 0;
        if (!userIsLoggedIn){
            Swal.fire({title: 'Error', text: 'You need to login', icon: 'error'});
            return;
        }

        setSelectedValue(rate);
        props.onChange(rate);
    }

    return (
        <>
            {maximumValueArr.map((_, index) => <FontAwesomeIcon 
                onMouseOver={() => handleMouseOver(index+1)}
                onClick={() => handleClick(index+1)}
                icon="star" key={index} 
                className={`fa-lg pointer ${selectedValue >= index+1 ? 'checked' : null}`}
            />)}
        </>
    )
}

interface ratingsProps {
    maximumValue: number;
    selectedValue: number;
    onChange(rate: number): void;
}