import NavBar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Row, Col } from 'react-bootstrap';

const VerifyUser = ()=>{
    const [isApprovedUser, setIsApprovedUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/users/usersToApproved")
      .then(function (response) {
        setIsApprovedUser(response.data);
      });
  }, []);
  console.log(isApprovedUser);
    
    return(
        <>
        <NavBar/>
        <br/>
        <br/>
        <br/>
        <br/>

        {isApprovedUser.map((e)=>{
            return (
                <li key={e._id}>{e.fname}</li>
            )
        })}
      </>

       
    )
}
export default VerifyUser