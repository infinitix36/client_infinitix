import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { Form, Button, Card } from "react-bootstrap";

const Register = () => {
  const [userRoleName, setuserRoleName] = useState("");
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orangeHrLink, setorangeHrLink] = useState("");
  const [GitHubUsername, setGitHubUsername] = useState("");
  const [userJiraLink, setuserJiraLink] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitFurtherDetails = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    if (password !== confirmPassword) {
      alert("Error: Passwords do not match!");
    } else {
      const postData = {
        userRoleName: userRoleName,
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        orangeHrLink: orangeHrLink,
        GitHubUsername: GitHubUsername,
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
    }
=======
    const postData = {
      userRoleName: userRoleName,
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      orangeHrLink: orangeHrLink,
      GitHubUsername: GitHubUsername,
      userJiraLink: userJiraLink,
      password: password,
      confirmPassword: confirmPassword,
    };
    axios
      .post("http://localhost:8000/authentication/register", postData)
      .then((res) => {
        // alert(res.data.message);
        swal("Account Registered", {
          icon: "success",
        });
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
>>>>>>> af7e1f72dec9cbcb0233adb44438527072b3576c
  };

  return (
    <div className="container">
      <Card>
        <Card.Header className="card-title text-center">Register</Card.Header>
        <Card.Body>
          <Form onSubmit={submitFurtherDetails}>
            <div className="row">
              <div className="col-md">
                <Form.Group controlId="fname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={(e) => setfName(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>

              <div className="col-md">
                <Form.Group controlId="lname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lname"
                    value={lname}
                    onChange={(e) => setlName(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-md">
                <Form.Group controlId="userRoleName">
                  <Form.Label>User Role Name</Form.Label>
                  <Form.Select
                    name="userRoleName"
                    value={userRoleName}
                    onChange={(e) => setuserRoleName(e.target.value)}
                  >
                    <option value="">Select Role</option>
                    <option value="developer">Developer</option>
                    <option value="BA">BA</option>
                    <option value="QA">QA</option>
                    <option value="QA">Project Manager</option>
                    <option value="QA">Tech Lead</option>
                    {/* admin - login */}
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="col-md">
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    unique
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-md">
                <Form.Group controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>

              <div className="col-md">
                <Form.Group controlId="orangeHrLink">
                  <Form.Label>Orange HR Link</Form.Label>
                  <Form.Control
                    type="text"
                    name="orangeHrLink"
                    value={orangeHrLink}
                    onChange={(e) => setorangeHrLink(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <Form.Group controlId="GitHubUsername">
                  <Form.Label>GitHub username</Form.Label>
                  <Form.Control
                    type="text"
                    name="GitHubUsername"
                    value={GitHubUsername}
                    onChange={(e) => setGitHubUsername(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md">
                <Form.Group controlId="userJiraLink">
                  <Form.Label>User Jira Link</Form.Label>
                  <Form.Control
                    type="text"
                    name="userJiraLink"
                    value={userJiraLink}
                    onChange={(e) => setuserJiraLink(e.target.value)}
                    required
                    style={{ width: "100%" }}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md">
                <Form.Group controlId="confirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                  />
                </Form.Group>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                variant="primary"
                type="submit"
                style={{
                  marginTop: "20px",
                }}
              >
                Register
              </Button>
            </div>
          </Form>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span>Have already an account?</span>
            <Link to="/login" style={{ marginLeft: "5px" }}>
              Login
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
