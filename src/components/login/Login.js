import { Button, Input } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <h1>Login to Cartrader</h1>
      <div className="login__content">
        <Input
          className="login__input"
          type="text"
          placeholder="Username"
          required
          onChange={(e) => e.target.value}
          color="secondary"
        />
        <Input
          className="login__input"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => e.target.value}
          color="secondary"
        />
        <Input
          className="login__input"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => e.target.value}
          color="secondary"
        />
        <Button variant="contained" color="secondary">
          Login
        </Button>
      </div>
      <div className="login__more">
        <p>No account yet?</p>
        <Link className="login__signup" to="/signup">
          <p>Join us</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
