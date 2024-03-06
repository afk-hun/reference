import { ChangeEvent, useEffect, useState } from "react";
import Input from "./Input";

type LoginFormProps = {
  submitHandler: (name: string, password: string) => Promise<void>;
  username: string;
  password: string;
  loading: boolean;
};

export function LoginForm(props: LoginFormProps) {
  const { submitHandler, username, password, loading } = props;
  const [isUsernameValid, setUsernameValid] = useState<boolean>(false);
  const [isPasswordValid, setPasswordValid] = useState<boolean>(false);
  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  useEffect(() => {
    setUsernameState(username);
    setPasswordState(password);
    setUsernameValid(username.length! >= 3);
    setPasswordValid(password.length! >= 6);
  }, [username, password]);

  function usernameInputHandler(event: ChangeEvent<HTMLInputElement>): void {
    setUsernameState(event.currentTarget.value);
    setUsernameValid(event.currentTarget.value.length! >= 3);
  }

  function passwordInputHandler(event: ChangeEvent<HTMLInputElement>): void {
    setPasswordState(event.currentTarget.value);
    setPasswordValid(event.currentTarget.value.length! >= 6);
  }

  return (
    <form
      className="col-12 col-md-6 mb-5"
      onSubmit={(event) => {
        event.preventDefault();
        submitHandler(usernameState, passwordState);
      }}
    >
      <div className="d-flex flex-column mb-3 gap-3">
        <Input
          label={"Username"}
          id={"username"}
          value={usernameState}
          onChange={usernameInputHandler}
        />
        <Input
          label={"Password"}
          id={"password"}
          type="password"
          value={passwordState}
          onChange={passwordInputHandler}
        />
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        disabled={!(isUsernameValid && isPasswordValid)}
      >
        {loading && (
          <span
            className="spinner-border spinner-border-sm"
            aria-hidden="true"
          ></span>
        )}
        <span role="status">{loading ? "Loading..." : "Login"}</span>
      </button>
    </form>
  );
}
