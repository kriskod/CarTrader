import { Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
function Signup() {
  return (
    <div className="signup">
      <h1>Signup to Cartrader</h1>
      <div className="signup__content">
        <Input
          className="signup__input"
          type="text"
          placeholder="Username"
          required
          onChange={(e) => e.target.value}
          color="secondary"
        />

        <Input
          className="signup__input"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => e.target.value}
          color="secondary"
        />
        <Input
          className="signup__input"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => e.target.value}
          color="secondary"
        />
        <Input
          className="signup__input"
          type="password"
          placeholder="Confirm Password"
          required
          onChange={(e) => e.target.value}
          color="secondary"
        />
        <Button variant="contained" color="secondary">
          Create account
        </Button>
      </div>
      <div className="signup__more">
        <p>Already have an account?</p>
        <Link className="signup__login" to="/login">
          <p>Login here</p>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
