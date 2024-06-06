import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import "./loginSignUp.css"; // Import CSS file for additional styling
import swal from "sweetalert";

const SignUpForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    navigate("/signin");
  };
  const saveUser = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = { name, email, password };

    try {
      const response = await UserService.signup(user);
      if (response.data.data) {
        swal("Good job!", response.data.message, "success");
        navigate("/signin");
      } else {
        swal("Oops!", response.data.message, "error");
      }
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        swal("Oops!", error.response.data.message, "error"); // Adjust accordingly if the error structure is different
      } else {
        swal("Oops!", "Something went wrong during signup", "error"); // Fallback error message
      }
    }
  };

  const mainStyle = {
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    fontFamily: "Jost, sans-serif",
    background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
  };

  const containerStyle = {
    width: "350px",
    height: "500px",
    overflow: "hidden",
    background:
      'url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/cover',
    borderRadius: "10px",
    boxShadow: "5px 20px 50px #000",
  };

  return (
    <div style={mainStyle}>
      <div className="main" style={containerStyle}>
        <input type="checkbox" id="chk" aria-hidden={true} />

        <div className="signup">
          <form onSubmit={saveUser}>
            <label htmlFor="chk" aria-hidden={true}>
              Sign up
            </label>
            <input
              type="text"
              name="txt"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign up</button>
            <button type="button" onClick={login}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
