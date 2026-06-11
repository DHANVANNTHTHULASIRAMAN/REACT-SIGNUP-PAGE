import { useState } from "react";
import styles from "./Signup.module.css";

function Signup() {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [same, notsame] = useState(false);

  function handlevalues(e) {
    const name = e.target.name;
    const value = e.target.value;

    const updatedValues = {
      ...values,
      [name]: value,
    };

    setvalues(updatedValues);

    notsame(
      updatedValues.password !== "" &&
      updatedValues.confirmpassword !== "" &&
      updatedValues.password !== updatedValues.confirmpassword
    );
  }

  function handlesubmit(e) {
    e.preventDefault();

    if (same) {
      alert("Passwords do not match");
      return;
    }

    console.log(values);
    alert("Signup completed");
    console.log(values)
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Create Account</h1>
        <p>Join us and start your journey today</p>

        <form className={styles.form} onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={values.name}
            onChange={handlevalues}
          />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={values.email}
            onChange={handlevalues}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handlevalues}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
            value={values.confirmpassword}
            onChange={handlevalues}
          />

          {same && (
            <p style={{ color: "red", margin: "0" }}>
              Password Mismatch
            </p>
          )}

          <button type="submit">Sign Up</button>
        </form>

        <div className={styles.footer}>
          Already have an account? <a href="/">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;