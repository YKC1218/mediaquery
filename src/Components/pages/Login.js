import { useHistory } from "react-router-dom";
import React from "react";

export default function Login() {
  let history = useHistory();
  return (
    <>
      <div>Login</div>;
      <button onClick={() => history.push("/")}>Go to main page</button>
    </>
  );
}
