import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div>Akos Ferenc Kalamar reference Page</div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
