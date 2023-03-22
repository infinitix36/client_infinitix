import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt from "jwt-decode";
import { Form, Button, Card } from "react-bootstrap";

import "../App.css";
const Register = () => {
  const [useRoleName, setuserRoleName] = useState("");
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orangechangeHrLink, setOrangechangeHrlink] = useState("");
  const [userGitHubLink, setuserGithubLink] = useState("");
  const [userJiraLink, setuserJiraLink] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitFurtherDetails = (e) => {
    e.preventDefault();
    const postData = {
      useRoleName: useRoleName,
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      orangechangeHrLink: orangechangeHrLink,
      userGitHubLink: userGitHubLink,
      userJiraLink: userJiraLink,
      password: password,
      confirmPassword: confirmPassword,
    };
    axios
      .post("http://localhost:8000/authentication/register", postData)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
  };

  return (
    <Card>
      <Card.Header>Register</Card.Header>
      <Card.Body>
        <Form onSubmit={submitFurtherDetails}>
          <Form.Group controlId="useRoleName">
            <Form.Label>User Role Name</Form.Label>
            <Form.Control
              type="text"
              name="useRoleName"
              value={useRoleName}
              onChange={(e) => setuserRoleName(e.target.value)}
            >
              {/* <option value="">Select Role</option>
          <option value="developer">Developer</option>
          <option value="BA">BA</option>
          <option value="QA">QA</option> */}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="fname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              value={fname}
              onChange={(e) => setfName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="lname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lname"
              value={lname}
              onChange={(e) => setlName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="orangeHrLink">
            <Form.Label>Orange HR Link</Form.Label>
            <Form.Control
              type="text"
              name="orangeHrLink"
              value={orangechangeHrLink}
              onChange={(e) => setOrangechangeHrlink(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="userGitHubLink">
            <Form.Label>User GitHub Link</Form.Label>
            <Form.Control
              type="text"
              name="userGitHubLink"
              value={userGitHubLink}
              onChange={(e) => setuserGithubLink(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="userJiraLink">
            <Form.Label>User Jira Link</Form.Label>
            <Form.Control
              type="text"
              name="userJiraLink"
              value={userJiraLink}
              onChange={(e) => setuserJiraLink(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Register;