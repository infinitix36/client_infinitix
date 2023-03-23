import NavBar from "../components/Navbar";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Profile = () => {
  const { fname } = useParams();

  const [rating, setRating] = useState(0);
  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  console.log(rating);
  // Optinal callback functions
  // const onPointerEnter = () => console.log('Enter')
  // const onPointerLeave = () => console.log('Leave')
  // const onPointerMove = (value: number, index: number) => console.log(value, index)

  const submitProjectData = (e) => {
    e.preventDefault();
    const postData = {
      rating: rating,
      fname: fname,
    };
    axios
      .post("http://localhost:8000/users/addRate", postData)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <form onSubmit={submitProjectData}>
        <Rating
          onClick={handleRating}
          // onPointerEnter={onPointerEnter}
          // onPointerLeave={onPointerLeave}
          // onPointerMove={onPointerMove}
          /* Available Props */
        />

        <input
          className="m-2 btn btn-dark text-white form-control"
          type="submit"
          value="Submit Details"
        ></input>
      </form>
    </div>
  );
};

export default Profile;
