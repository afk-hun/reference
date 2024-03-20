import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { useEffect } from "react";
import { useStoreDispatch, useStoreSelector } from "./store/hooks";
import { fetchUsers, setActiveUser } from "./store/user-slice";
import { fetchCategories, fetchItems } from "./store/item-slice";
import { useAuthContext } from "./auth-context";
import { UserType } from "./utils/types";

export function FakeStore() {
  const authCtx = useAuthContext();

  const userDispatch = useStoreDispatch();

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = (await userDispatch(fetchUsers()))
          .payload as UserType[];
        userDispatch(
          setActiveUser({
            user: response.find((user) => user.username === authCtx.user)!,
          })
        );
      } catch {}
    }
    loadUsers();
    userDispatch(fetchItems());
    userDispatch(fetchCategories());
  }, []);

  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}
