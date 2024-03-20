import { ChangeEvent, FormEvent, useRef, useState } from "react";
import UserInfoInput from "./components/UserInfoInput";
import { useStoreDispatch, useStoreSelector } from "./store/hooks";
import { updateUser } from "../../api/fakeStoreCalls";
import { UserType } from "./utils/types";
import { updateUserInfo } from "./store/user-slice";

export function User() {
  const user = useStoreSelector((state) => state.user.currentUser);
  const userDispatch = useStoreDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordNewRef = useRef<HTMLInputElement>(null);
  const passwordNewRepeatRef = useRef<HTMLInputElement>(null);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const cityRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);

  async function submitProfileChange(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    if (
      user &&
      passwordNewRef !== null &&
      passwordNewRef.current?.value !== ""
    ) {
      if (
        passwordNewRef.current?.value === passwordNewRepeatRef.current?.value
      ) {
        user.password = passwordNewRef.current!.value;
      }
    }
    try {
      const response = (await updateUser({
        email: emailRef.current!.value,
        username: usernameRef.current!.value,
        password: user!.password,
        id: user!.id,
        name: {
          firstname: firstNameRef.current!.value,
          lastname: lastNameRef.current!.value,
        },
        address: {
          city: cityRef.current!.value,
          street: streetRef.current!.value,
          number: numberRef.current!.value,
          zipcode: zipRef.current!.value,
          geolocation: {
            lat: user!.address.geolocation.lat,
            long: user!.address.geolocation.long,
          },
        },
        phone: phoneRef.current!.value,
      })) as UserType;
      response.id = user!.id;
      userDispatch(updateUserInfo({ user: response }));
      /* TODO: 
          need to update authCtx but if I update it, 
            after a refresh will cause an error. There is not a bug,
            I do not have a real database what I can update. 
            So I will get the same data every refresh.
      */
      setIsEdit(false);
    } catch {}

    setLoading(false);
  }

  function validatePassword(event: ChangeEvent<HTMLInputElement>): void {
    const oldPwd = passwordRef.current?.value;
    const newPwd = passwordNewRef.current?.value;
    const newPwdRepeat = passwordNewRepeatRef.current?.value;
    if (newPwd!.length !== 0 || newPwdRepeat!.length !== 0) {
      setIsValidPassword(
        passwordNewRef.current?.value === passwordNewRepeatRef.current?.value
      );
    }
  }

  return (
    <div className="container text-center">
      <div className="d-flex flex-column gap-3 mt-3 mb-3">
        {user && (
          <form onSubmit={submitProfileChange}>
            <div className="d-flex flex-column gap-3 p-3 border rounded-1">
              <h1 className="">Account</h1>
              <UserInfoInput
                id="username"
                isEdit={isEdit}
                label={"Username"}
                value={user.username}
                ref={usernameRef}
              />
              {!isEdit && (
                <UserInfoInput
                  isEdit={isEdit}
                  label={"Password"}
                  value={user.password}
                  type="password"
                />
              )}
              {isEdit && (
                <div className="d-flex flex-column gap-3">
                  <h5 className="mt-3">Edit password</h5>
                  <UserInfoInput
                    isEdit={isEdit}
                    label={"Old password"}
                    value={""}
                    type="password"
                    ref={passwordRef}
                  />
                  <UserInfoInput
                    isEdit={isEdit}
                    label={"New password"}
                    value={""}
                    type="password"
                    ref={passwordNewRef}
                    //onChange={validatePassword}
                  />
                  <UserInfoInput
                    isEdit={isEdit}
                    label={"New password repeat"}
                    value={""}
                    type="password"
                    ref={passwordNewRepeatRef}
                    error={!isValidPassword ? "Passwords are not the same" : ""}
                    //onChange={validatePassword}
                  />
                </div>
              )}
            </div>
            <div className="d-flex flex-column gap-3 p-3 border mt-3 rounded-1">
              <h1 className="">Personal</h1>
              <UserInfoInput
                isEdit={isEdit}
                label={"First name"}
                value={user.name.firstname}
                ref={firstNameRef}
              />
              <UserInfoInput
                isEdit={isEdit}
                label={"Last name"}
                value={user.name.lastname}
                ref={lastNameRef}
              />
              <UserInfoInput
                isEdit={isEdit}
                label={"E-mail"}
                value={user.email}
                ref={emailRef}
              />
              <UserInfoInput
                isEdit={isEdit}
                label={"Phone"}
                value={user.phone}
                ref={phoneRef}
              />
            </div>
            <div className="d-flex flex-column gap-3 p-3 border mt-3 rounded-1">
              <h1 className="">Address</h1>
              <UserInfoInput
                isEdit={isEdit}
                label={"City"}
                value={user.address.city}
                ref={cityRef}
              />
              <UserInfoInput
                isEdit={isEdit}
                label={"Street"}
                value={user.address.street}
                ref={streetRef}
              />
              <UserInfoInput
                isEdit={isEdit}
                label={"Number"}
                value={user.address.number}
                ref={numberRef}
              />
              <UserInfoInput
                isEdit={isEdit}
                label={"Zip code"}
                value={user.address.zipcode}
                ref={zipRef}
              />
            </div>
            {isEdit && (
              <div className="d-flex gap-3 mt-3">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading && (
                    <span
                      className="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                  )}
                  <span role="status">{loading ? "Saving..." : "Save"}</span>
                </button>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => {
                    setIsEdit(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
            {!isEdit && (
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => {
                  setIsEdit(true);
                }}
              >
                Edit
              </button>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
