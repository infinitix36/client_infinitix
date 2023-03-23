import React, { useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";

import "../App.css";
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const registerUser = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://yourapi.com/register", {
        name: name,
        email: email,
        githubLink: githubLink,
        dob: dob,
        password: password,
        confirmPassword: confirmPassword,
        errors: errors,
      });
      const token = response.data.token;
      const decodedToken = jwt.decode(token);
      // Do something with the token, such as store it in local storage or a cookie
    } catch (error) {
      console.log(error);
    }

    const validationErrors = {};
    if (!name) validationErrors.name = "Name is required";
    if (!email) validationErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      validationErrors.email = "Invalid email format";
    if (!password) validationErrors.password = "Password is required";
    else if (password.length < 6)
      validationErrors.password = "Password must be at least 6 characters long";
    if (password !== confirmPassword)
      validationErrors.confirmPassword = "Passwords do not match";
    setErrors(validationErrors);
    // submit form if no validation errors
    if (Object.keys(validationErrors).length === 0) {
      // handle form submission logic here
      console.log("Form submitted");
    }
  };

  return (
    <div className="register-card">
      
      {/* style={{
       backgroundImage:
         "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)"
      }}  */}
      <div className="component">

      <form onSubmit={registerUser}>
        <h2 className="text-uppercase mb-2.5 mt-1">Create an account</h2>

        <div className="form-label mb-3">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control mt-1"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="form-label mb-3">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control mt-1"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-label mb-3">
          <label for="githubLink">Github Link</label>
          <input
            type="text"
            id="githubLink"
            className="form-control mt-1"
            placeholder="Enter your Github link"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
          />
        </div>

        <div className="form-label mb-3">
          <label for="dob">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            className="form-control mt-1"
            placeholder="Enter your date of birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div className="form-label mb-3">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control mt-1"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div className="form-label mb-3">
          <label for="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control mt-1"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
        </div>

        <div className="form-check d-flex justify-content-center mb-3">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="form2Example3cg"
          />
          <label className="form-check-label" for="form2Example3g">
            I agree all statements in{" "}
            <a href="#!" className="text-body">
              <u>Terms of service</u>
            </a>
          </label>
        </div>

        <div className="d-flex justify-content-center mt-1">
          <button type="submit" className="blue-button">
            Register
          </button>
        </div>

        <p className="text-center text-muted mt-3 mb-0">
          Have already an account?{" "}
          <a href="#!" className="fw-bold text-body">
            <u>Login here</u>
          </a>
        </p>
      </form>
    </div>
   
     </div>
  );
};

export default Register;
