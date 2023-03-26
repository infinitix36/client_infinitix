
import swal from "sweetalert";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useState } from "react";
const FeedBack = ({projectId}) => {

    const data = jwt_decode(JSON.parse(localStorage.getItem("token")))?.userData;
    const [feedback, setAddFeedBack] = useState();
    const addFeedBack = (e) => {
        e.preventDefault();
        const postData = {
          projectId: projectId,
          feedback: feedback,
          feedBy: data._id,
        };
    
        axios
          .post("http://localhost:8000/project/addFeed", postData)
          .then((res) => {
            if (res.data.status === true) {
              swal("Good job!", res.data.message, "success");
             
            } else {
              swal("Error !", res.data.message, "danger");
            }
          })
          .catch((error) => {
            swal("Sorry !", "BackEnd Error ! Try again Later !!", "info");
          });
      };
    
    return (
      <div>
            <div className="container mt-5 mb-5">
  <form onSubmit={addFeedBack}>
    <div className="row mt-2 justify-content-md-center">
      <div className="col-md-4">
        <input
          required={true}
          type="text"
          className="form-control"
          placeholder="Add feedback"
          aria-label="Add feedback"
          aria-describedby="button-addon2"
          value={feedback}
          onChange={(e) => {
            setAddFeedBack(e.target.value);
          }}
        />
      </div>
      <div className="col-md-1">
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Add
        </button>
      </div>
    </div>
  </form>
</div>

      </div>
    );
  };
  export default FeedBack;
  