import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      setIsLoggedIn(true);
      navigate("/courses");
    } else {
      alert("Please enter email and password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-left">
          <div className="login-logo">🎓 SkillSphere</div>
          <h2>Welcome back</h2>
          <p>Please enter your details</p>

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-options">
            <div className="login-options-left">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <span>Remember for 30 days</span>
            </div>
            <button className="link-button">Forgot password</button>
          </div>

          <button className="sign-in" onClick={handleLogin}>
            Sign in
          </button>

          <button className="google-signin">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
            />
            Sign in with Google
          </button>

          <p className="signup-text">
            Don’t have an account? <button className="link-button">Sign up</button>
          </p>
        </div>

        <div className="login-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
