import { MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "./auth-context";
import { useStoreSelector } from "./store/hooks";
import { makeFirstLetterUpperCase } from "./utils/functions";

export function Navigation() {
  const authCtx = useAuthContext();
  const user = useStoreSelector((state) => state.user.currentUser);

  const navigate = useNavigate();

  function logoutHandler(event: MouseEvent<HTMLAnchorElement>): void {
    event.preventDefault();
    authCtx.logout();
    navigate("./login");
  }

  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary ps-lg-5 pe-lg-5">
      <div className="container-fluid">
        <h1
          className="navbar-brand p-2 m-0"
          onClick={() => {
            navigate("./");
          }}
        >
          Fake Store
        </h1>
        <div>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#search"
            aria-controls="search"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-search"></i>
          </button>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="search"
        >
          <form className="d-flex align-self-center" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {authCtx.user !== "" && (
              <>
                <li className="nav-item ">
                  <a className="btn btn-outline-secondary disabled" href="#/">
                    Cart
                  </a>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to={`user/${user?.id}`}>
                    {user && makeFirstLetterUpperCase(user.name.firstname)}
                  </Link>
                </li>
              </>
            )}
            {authCtx.user === "" && (
              <li className="nav-item">
                <Link className="nav-link" to={"login"}>
                  Login
                </Link>
              </li>
            )}
            {authCtx.user !== "" && (
              <li className="nav-item">
                <a className="nav-link" href={""} onClick={logoutHandler}>
                  Log out
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}