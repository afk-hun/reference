import { useState } from "react";
import { useStoreSelector } from "../store/hooks";
import { UserType } from "../utils/types";
import { makeFirstLetterUpperCase } from "../utils/functions";

type DropDownUsersProps = {
  mockUserHandler: (id: number) => void;
};

export function DropDownUsers({ mockUserHandler }: DropDownUsersProps) {
  const userSelector = useStoreSelector((state) => state.user.users);

  const [activeMock, setActiveMock] = useState<UserType>();

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Mock users
      </button>
      <ul className="dropdown-menu">
        {userSelector &&
          userSelector.map((user) => {
            return (
              <li
                className={`dropdown-item ${activeMock === user && "active"}`}
                key={user.id}
                aria-current="true"
                onClick={(event) => {
                  setActiveMock(user);
                  event.currentTarget.classList.add("active");
                  mockUserHandler(user.id);
                }}
              >
                {makeFirstLetterUpperCase(user.name.firstname)}{" "}
                {makeFirstLetterUpperCase(user.name.lastname)}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
