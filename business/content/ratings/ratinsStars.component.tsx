import { useState } from "react";
import styles from "./ratings.module.css"
import { Rating } from 'react-simple-star-rating'
import useTranslation from "next-translate/useTranslation";


const StarsRatings = () => {
  const { t, lang } = useTranslation("home");
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
        <Rating
          onClick={handleRating}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}
          initialValue={5}
          readonly
        /* Available Props */
        />
        <h4>{t("section4.description")}</h4>
    </div>
  );
};

export default StarsRatings;