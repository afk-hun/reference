import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { useEffect } from "react";
import { useStoreDispatch } from "./store/hooks";
import { fetchUsers } from "./store/user-slice";
import { fetchItems } from "./store/item-slice";

export function FakeStore() {
  const userDispatch = useStoreDispatch();

  useEffect(() => {
    userDispatch(fetchUsers());
    userDispatch(fetchItems());
  }, [userDispatch]);

  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}
