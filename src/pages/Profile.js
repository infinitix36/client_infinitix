import NavBar from "../components/Navbar";
import { Rating } from 'react-simple-star-rating'
import { useState,useEffect } from "react";
const Profile = () => {
  const [rating, setRating] = useState(0)
  const handleRating = (rate: number) => {
    setRating(rate)

    // other logic
  }
  console.log(rating);
  // Optinal callback functions
  // const onPointerEnter = () => console.log('Enter')
  // const onPointerLeave = () => console.log('Leave')
  // const onPointerMove = (value: number, index: number) => console.log(value, index)

  return (
    <div>
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <Rating
        onClick={handleRating}
        // onPointerEnter={onPointerEnter}
        // onPointerLeave={onPointerLeave}
        // onPointerMove={onPointerMove}
        /* Available Props */
      />


    </div>
  );
};

export default Profile;
