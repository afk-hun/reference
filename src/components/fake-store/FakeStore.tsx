import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { useEffect } from "react";
import { useUserDispatch } from "./store/hooks";
import { fetchUsers } from "./store/slice";

export function FakeStore() {
  const userDispatch = useUserDispatch();

  useEffect(() => {
    userDispatch(fetchUsers());
  }, [userDispatch]);

  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}
