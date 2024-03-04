import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Input from "./Input";
import { useAuthContext } from "./auth-context";
import { userLogin } from "../../api/fackeStoreCalls";

type ResponseData = {
  token: string;
};

export function Login() {
  const authCtx = useAuthContext();
  const usernameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const [isUsernameValid, setUsernameValid] = useState<boolean>(false);
  const [isPasswordValid, setPasswordValid] = useState<boolean>(false);

  async function onsubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const name = usernameInput.current!.value;
      const response = await userLogin(name, passwordInput.current!.value);
      authCtx.login(name, (response as ResponseData).token);
    } catch {}
  }
  function usernameInputHandler(event: ChangeEvent<HTMLInputElement>): void {
    setUsernameValid(usernameInput.current?.value.length! >= 3);
  }
  function passwordInputHandler(event: ChangeEvent<HTMLInputElement>): void {
    setPasswordValid(passwordInput.current?.value.length! >= 6);
  }

  return (
    <div className="container">
      <form className="col-8 col-md-6" onSubmit={onsubmitHandler}>
        <div className="mb-3">
          <Input
            label={"Username"}
            id={"username"}
            ref={usernameInput}
            onChange={usernameInputHandler}
          />
          <Input
            label={"Password"}
            id={"password"}
            ref={passwordInput}
            type="password"
            onChange={passwordInputHandler}
          />
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={!(isUsernameValid && isPasswordValid)}
        >
          Login
        </button>
      </form>
    </div>
  );
}
