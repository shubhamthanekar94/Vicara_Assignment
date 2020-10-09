import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Menubar from "../Menubar/Menubar";
import { signin, authenticate, isAuthenticated } from "../../auth/helper";
const Signin = () => {
  const [values, setValues] = useState({
    email: "admin@gmail.com",
    password: "admin123",
    error: "",
    loading: "",
    didRedirect: false, //if user s successfully able to signed in then we can redirect him to specific page
  });
  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("Sign In request failed"));
  };
  const performRedirect = () => {
    if (isAuthenticated()) {
      return <Redirect to="/stackoverflow" />; //redirect to home page on authentication success!!
    }
  };
  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };
  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-3 offset-sm-4 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                type="email"
              ></input>
            </div>
            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
              ></input>
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Menubar />
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
    </div>
  );
};

export default Signin;
