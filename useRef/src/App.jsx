import React, { useRef } from "react";

export default function App() {
  const usernameRef = useRef("dd");
  const passwordRef = useRef("");

  const login = (e) => {
    e.preventDefault();
    console.log(
      `username: ${usernameRef.current.value}, password: ${passwordRef.current.value}`
    );
  };

  return (
    <>
      <h1>Uncontrolled Form</h1>
      <p>
        Uncontrolled forms are managed by the DOM, not React. React doesn't
        track their values continuously; it only reads them only when needed.
        (e.g., using useRef)
      </p>
      <form>
        <div>Example:</div>
        <input
          id="username"
          type="username"
          placeholder="Username"
          ref={usernameRef}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <button type="submit" onClick={(e) => login(e)}>
          Login
        </button>
      </form>
    </>
  );
}
