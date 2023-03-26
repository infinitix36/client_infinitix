import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = async (e) => {
    e.preventDefault();
    const postData = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:8000/authentication/login", postData)
      .then((res) => {
        alert(res.data.message);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        if (res?.data?.status === true) {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h5 className="card-title text-center">Login Form</h5>
              <Form onSubmit={loginUser}>
                      
                <Form.Group controlId="email">
                  <Form.Label style={{
                      marginTop: "10px"}}>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    unique
                  />
                </Form.Group>
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
                    Login
                  </Button>
                </div>
              </Form>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span>Or </span>
                <Link to="/register" style={{ marginLeft: "10px" }}>
                  Create new account
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

function Logcard() {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "6000px",
        width: "90%",
      }}
    >
      <Login />
    </div>
  );
}

export default Logcard;
