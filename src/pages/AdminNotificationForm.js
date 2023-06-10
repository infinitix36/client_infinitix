import React, { useState } from "react";
import axios from "axios";
import { Nav } from "react-bootstrap";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";

const AdminNotificationForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend to create a new notification
      const response = await axios.post("http://localhost:8000/notifications", {
        message,
      });
      console.log(response.data); // Notification object returned from the server

      // Clear the input field
      // setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        {
          // <div
          //   className="side-bar"
          //   style={{ position: "fixed", left: "0", top: "64px", bottom: "0" }}
          // >
          //   <SideBar />
          // </div>
        }
        <h2>Create Notification</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter notification message"
            required
          ></textarea>
          <button className="btn btn-primary mt-3 form-control" type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default AdminNotificationForm;
