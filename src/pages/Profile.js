// import addtowishlist from "../images/addtowishlist.png";
// import { SocialIcon } from "react-social-icons";
import "../App.css";
import jwt_decode from "jwt-decode";
import NavBar from "../components/Navbar";

function ProfileOverview(props) {
  const data = jwt_decode(JSON.parse(localStorage.getItem("token")))?.userData;
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import swal from "sweetalert";
const Profile = () => {
  const { id } = useParams();

  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const handle1 = (rate: number) => {
    setRating1(rate);

    // other logic
  };
  const handle2 = (rate: number) => {
    setRating2(rate);

    // other logic
  };
  console.log(rating1);
  // Optinal callback functions
  // const onPointerEnter = () => console.log('Enter')
  // const onPointerLeave = () => console.log('Leave')
  // const onPointerMove = (value: number, index: number) => console.log(value, index)

  const submitProjectData = (e) => {
    e.preventDefault();
    const postData = {
      rating1: rating1,
      rating2: rating2,
      id: id,
    };
    axios
      .post("http://localhost:8000/users/addRate", postData)
      .then((res) => {
        // alert(res.data.message);
        swal("Rated success", {
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <NavBar/>
      <div className="row justify-content-center ">
        <div className="card ">
          <div className="card-body">
            <h3 className="text-center">
            Profile overview
          </h3>
          </div>
        </div>
        <div className="col-md-8">
          <div
            className="card mt-5 crud shadow-lg p-3 mb-5 mt-5 bg-body rounded "
          // style={{ backgroundColor: "rgb(199,227,244)" }}
          >
            <div className="col d-flex justify-content-center mt-3">
              <img
                src={data?.userImage}
                className="rounded-circle"
                alt="Cinque Terre"
                style={{ height: "120px", width: "120px" }}
              />
            </div>
            <div className="card-body">
              <form>
                <div className="row justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="inputFirst name">Name</label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="email"
                      className="form-control a2"
                      id="inputEmail4"
                      value={data?.fname}
                      disabled={true}
                    />
                  </div>
                </div>

                <div className="row mt-2 justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="inputlname">Jobtitle</label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="lname"
                      className="form-control a2"
                      id="inputlname"
                      value={data?.jobPosition}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mt-2 justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="inputEmail4">Department</label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="email"
                      className="form-control a2"
                      id="inputEmail4"
                      value={data?.department}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mt-2 justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="inputEmail4">User Role</label>
                  </div>
                  <div className="form-group col-md-5">
                    {/* <input
                      type="email"
                      className="form-control a2"
                      id="inputEmail4"
                      value={data?.userRoleId._id}
                      disabled={true}
                    /> */}
                  </div>
                </div>
                <div className="row mt-2 justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="inputEmail4">Email </label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="email"
                      className="form-control a2"
                      id="inputEmail4"
                      value={data?.emailAddress}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mt-2 justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="inputEmail4">Phone No</label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="email"
                      className="form-control a2"
                      id="inputEmail4"
                      value={data?.phoneNumber}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mt-2 justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="inputEmail4">Date Of Birth </label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="email"
                      className="form-control a2"
                      id="inputEmail4"
                      value={data?.dob}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mt-2 ">
                  <div className="col-md-2"></div>
                  {/* <div className="col-md-3 mt-3">
                  <button
                    type="submit"
                    className="btn form-control  border border-secondary "
                    style={{ background: "#ass" }}
                  >
                    <i className="bi bi-heart" style={{ height: "50px" }}></i>
                    <h6>Add to wishlist</h6>
                  </button>
                </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileOverview;