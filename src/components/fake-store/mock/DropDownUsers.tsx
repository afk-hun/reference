import { useState } from "react";
import { useUserSelector } from "../store/hooks";
import { User } from "../store/slice";

type DropDownUsersProps = {
  mockUserHandler: (id: number) => void;
};

export function DropDownUsers({ mockUserHandler }: DropDownUsersProps) {
  const userSelector = useUserSelector((state) => state.user.items);

  const [activeMock, setActiveMock] = useState<User>();

  function makeFirstLetterUpperCase(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

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
