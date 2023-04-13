import Image from "next/image";
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating: any) => {
  console.log(newRating);
};

const Ratings = () => {
  return (
    <div>
      <div>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
      </div>
      <p>Te ha resultado util la información</p>
      <div>
        <Image src="/images/recurso3.png" alt="" width={70} height={70}/>
      </div>
    </div>
  );
};

export default Ratings;
