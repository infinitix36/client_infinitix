// import addtowishlist from "../images/addtowishlist.png";
// import { SocialIcon } from "react-social-icons";
import "../App.css";
import jwt_decode from "jwt-decode";
import NavBar from "../components/Navbar";

function Profile(props) {
  const data = jwt_decode(JSON.parse(localStorage.getItem("token")))?.userData;


  return (
    <>
      <NavBar/>
      <div className="row justify-content-center ">
        <div className="card ">
          <div className="card-body">
            <h3 className="text-center">
            Profile
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
                    <label for="inputFirstName">Name</label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type='text'
                      className="form-control a2"
                      id="inputFirstName"
                      value={data?.fname}
                      disabled={true}
                    />
                    {console.log(data?.fname)}
                  </div>
                </div>

                <div className="row mt-2 justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="userRoleName">userRoleName</label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type='text'
                      className="form-control a2"
                      id="userRoleName"
                      value={data?.userRoleName}
                      disabled={true}
                    />
                    
                  </div>
                </div>
                <div className="row mt-2 justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="GitHubUsername">GitHubUsername</label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type='text'
                      className="form-control a2"
                      id="GitHubUsername"
                      value={data?.GitHubUsername}
                      disabled={true}
                    />
                    {console.log(data?.GitHubUsername)}
                  </div>
                </div>
                <div className="row mt-2 justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="orangeHrLink">orangeHrLink</label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type='url'
                      className="form-control a2"
                      id="orangeHrLink"
                      value={data?.orangeHrLink}
                      disabled={true}
                    />
                    {console.log(data?.orangeHrLink)}
                  </div>
                </div>
                <div className="row mt-2 justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="Email">Email</label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="email"
                      className="form-control a2"
                      id="Email"
                      value={data?.email}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mt-2 justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="phoneNo">Phone No</label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type='tel'
                      className="form-control a2"
                      id="phoneNo"
                      value={data?.phone}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mt-2 justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="userJiraLink">UserJiraLink </label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type='url'
                      className="form-control a2"
                      id="userJiraLink"
                      value={data?.userJiraLink}
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

export default Profile;