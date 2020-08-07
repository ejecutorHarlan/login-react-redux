import React from "react";
import { connect } from "react-redux";
import { onChangeEmail, onChangePassword, handleLogin } from "../../store";
import styles from "./login.module.css";

const Login = (props) => {
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await props.handleLogin(props.email, props.password);
    console.log(response);
    if (response.type === "login_success") {
      props.history.push("/home");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.loginText}>Iniciar sesión</h1>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            onChange={props.onChangeEmail}
            defaultValue={props.email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className={styles.input}
            onChange={props.onChangePassword}
            value={props.password}
            required
            minLength="7"
          />
          <button className={styles.button} type="submit">
            Login
          </button>
          {props.message && (
            <p
              className={styles.message}
              style={{ color: props.logged ? "#17fd00" : "#ad2c2c" }}
            >
              {props.message}
            </p>
          )}


        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.email,
    password: state.password,
    logged: state.logged,
    message: state.message,
  };
};

const mapDispatchToProps = {
  onChangeEmail,
  onChangePassword,
  handleLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
