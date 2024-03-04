import { Outlet } from "react-router";
import AuthContextProvider from "../components/fake-store/auth-context";
import { Link } from "react-router-dom";

export default function FakeStorePage() {
  return (
    <AuthContextProvider>
      {/* <div className="container-xxl d-flex flex-column align-items-center p-2 fs-1 fw-lighter"> */}
      <nav className="navbar navbar-expand-sm bg-body-tertiary ">
        <div className="container-fluid ">
          <h1 className="navbar-brand">Fake Store</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <form className="d-flex" role="search">
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
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  User
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"login"}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      {/* </div> */}
    </AuthContextProvider>
  );
}
