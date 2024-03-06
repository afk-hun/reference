import { useState } from "react";

import { useAuthContext } from "./auth-context";
import { userLogin } from "../../api/fakeStoreCalls";
import { Link, useNavigate } from "react-router-dom";
import { useUserSelector } from "./store/hooks";
import { LoginForm } from "./LoginForm";
import { DropDownUsers } from "./mock/DropDownUsers";

type ResponseData = {
  token: string;
};

export function Login() {
  const navigate = useNavigate();
  const authCtx = useAuthContext();

  const userSelector = useUserSelector((state) => state.user.items);

  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [loading, setLoading] = useState(false);

  async function onsubmitHandler(name: string, password: string) {
    setLoading(true);
    try {
      const response = await userLogin(name, password);
      authCtx.login(name, (response as ResponseData).token);
      setLoading(false);
      navigate("../", { replace: true });
    } catch {}
  }

  function mockUserHandler(id: number) {
    const user = userSelector.find((user) => user.id === id);
    setUsernameState(user?.username ?? "");
    setPasswordState(user?.password ?? "");
  }

  return (
    <div className="container-lg p-4">
      <div className="d-flex flex-column align-items-center gap-3">
        <div className="d-flex justify-content-center flex-wrap mb-3 mb-lg-5">
          <h1 className="fw-lighter">Earn the world's</h1> &nbsp;
          <h1 className="fw-semibold">high-ends</h1> &nbsp;
          <h1 className="fw-lighter">products</h1>
        </div>
      </div>
      <div className="d-flex flex-column-reverse flex-lg-row row-gap-3">
        <div className="container d-flex flex-column justify-content-center">
          <p>
            This API does not support any mutable database so here are some user
            who helps to log in 😉
          </p>
          <DropDownUsers mockUserHandler={mockUserHandler} />
        </div>
        <div className="container">
          <LoginForm
            submitHandler={onsubmitHandler}
            username={usernameState}
            password={passwordState}
            loading={loading}
          />

          <label className="text-responsive mb-3">
            Or if you do not have account, please{" "}
            <Link to="../register">register</Link> one 👨🏻‍💻
          </label>
        </div>
      </div>
    </div>
  );
}
