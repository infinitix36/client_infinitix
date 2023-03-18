import React, { useState } from "react";
import { Link} from 'react-router-dom';
import axios from "axios";
import jwt from "jwt-decode";
import "../App.css";
// import { FaFacebookF } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://yourapi.com/login", {
        email: email,
        password: password,
      });
      const token = response.data.token;
      const decodedToken = jwt.decode(token);
      // Do something with the token, such as store it in local storage or a cookie
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-card">
      <form onSubmit={loginUser}>
        <h2 className="text-uppercase text-center mb-4">Login</h2>
        <div className="form-label mb-3">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-label mb-3">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="blue-button mc-5">
            Login
          </button>
        </div>

        <div className="d-flex justify-content-center">
        <Link to="/register">
          <button className="green-button me-3 mt-3">Create new account</button>
        </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
