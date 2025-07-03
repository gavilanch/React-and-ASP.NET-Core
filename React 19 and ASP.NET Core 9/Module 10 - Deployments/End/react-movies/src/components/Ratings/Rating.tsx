import { useEffect, useState } from "react";
import styles from './Rating.module.css'

export default function Rating(props: RatingProps){

    const [maxRatingArray, setMaxRatingArray] = useState<number[]>([]);
    const [temporalSelectedValue, setTemporalSelectedValue] = useState<number>(props.selectedVote);
    const [vote, setVote] = useState<number>(props.selectedVote);

    useEffect(() => {
        setMaxRatingArray(Array(props.maxRating).fill(0));
    }, [props.maxRating]);

    function onMouseEnter(vote: number){
        setTemporalSelectedValue(vote);
    }

    function onMouseLeave(){
        setTemporalSelectedValue(vote);
    }

    function onClick(vote: number){
        setTemporalSelectedValue(vote);
        setVote(vote);
        props.onVote(vote);
    }

    return (
        <>
            {maxRatingArray.map((_, index) => <i key={index}
                onMouseEnter={() => onMouseEnter(index + 1)}
                onMouseLeave={() => onMouseLeave()}
                onClick={() => onClick(index + 1)}
                className={`bi bi-star-fill ms-1 ${index < temporalSelectedValue ? styles.checked : null}`}
            >

            </i>)}
        </>
    )

}

interface RatingProps {
    maxRating: number;
    onVote(vote: number): void;
    selectedVote: number;
}