import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN } from "./AuthQueries";

export default () => {
  // Variables
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");

  // Query
  const requestSecret = useMutation(LOG_IN, {
    variables: { email: email.value }
  });

  // Function
  const onLogin = e => {
    e.preventDefault();
    if (email !== "") {
      requestSecret();
    }
  };

  return (
    <AuthPresenter
      action={action}
      setAction={setAction}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onLogin={onLogin}
    />
  );
};
