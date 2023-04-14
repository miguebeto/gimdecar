import { useState } from "react";
import styles from "./ratings.module.css"
import { Rating } from 'react-simple-star-rating'


const StarsRatings = () => {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)

    // other logic
  }
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value: number, index: number) => console.log(value, index)


  return (
    <div className={styles.ratings}>
      <div>
        <Rating
          onClick={handleRating}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}
          initialValue={3}
          style={{marginLeft: '65px'}}
        /* Available Props */
        />
        <p>Te ha resultado útil esta información?</p>
      </div>
    </div>
  );
};

export default StarsRatings;