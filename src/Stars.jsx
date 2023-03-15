import { useState } from "react";
import styles from './styles/star.module.css';

function Stars() {
    const stars = Array(5).fill(0);
    const [ rating, setRating ] = useState(0);  // inital value for the rating is 0
    const [votes , setVotes] = useState([]);    // Empty array that will contain the votes

    const handelClick = (value) => { 
        setRating(value);                       // when click update the rating
        setVotes([...votes, value]);            // and update the votes array 
    }

    const totalVotes = [...votes, rating].reduce(  //  uses reduce to sum up all the elements in an array
        (accumulator , currentValue) => accumulator + currentValue , 0); 
    const average = totalVotes / votes.length + 1; // get the average of votes
    

    return ( 
    <div className={styles.starRating}>
        {stars.map((star, index)=> {
            index +=1
            return(
                <button 
                    type="button" key={index} 
                    className={index <= rating ? styles.on : styles.off} 
                    onClick={() => handelClick(index)}
                    >
                    <span>&#9733;</span>
                </button>
                );
        })}
        <p>Votes: ({average.toFixed(1)})</p> {/* Format the number to a fixed number of decimal places */}
    </div> 
    );
}
export default Stars;