import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "../css/Login.css";
import { auth } from "../firebase";
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';
import $ from 'jquery'


toast.configure()
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function SignUp(e) {
    e.preventDefault();
    $('.login_loading').show()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((e) => {
        toast.error(e.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        $('.login_loading').hide()
      });
  }

  function SignIn(e) {
    e.preventDefault();
    $('.login_loading').show()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        toast.error(e.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        $('.login_loading').hide()
      });
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt="Amazon logo"
        ></img>
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="login_signinButton" onClick={SignIn}>
            Sign-In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.{" "}
        </p>
        <button className="login_signupButton" onClick={SignUp}>
          Create your Amazon Account
        </button>

      </div>
      <ReactLoading color={'black'} type={"bars"} className='login_loading' />

    </div>
  );
}

export default Login;
