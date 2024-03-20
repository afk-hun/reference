import {
  type ComponentPropsWithoutRef,
  forwardRef,
  useState,
  useEffect,
} from "react";

type UserInfoInputProps = {
  isEdit: boolean;
  label: string;
  value: string | number;
  error?: string;
} & ComponentPropsWithoutRef<"input">;

const UserInfoInput = forwardRef<HTMLInputElement, UserInfoInputProps>(
  function UserInfoInput({ isEdit, label, value, id, error, ...rest }, ref) {
    const [text, setText] = useState<string | number>("");

    const inputClass = error ? " is-invalid" : "";

    useEffect(() => {
      setText(value);
    }, []);

    return (
      <div className="d-flex align-items-center justify-content-between gap-3">
        <label htmlFor={id}>{label}</label>
        <div className="d-flex flex-column">
          <input
            ref={ref}
            id={id}
            className={"form-control border-0" + inputClass}
            value={text}
            disabled={!isEdit}
            aria-readonly={isEdit}
            onChange={(event) => {
              setText(event.currentTarget.value);
            }}
            {...rest}
            style={{ maxWidth: "180px" }}
          />
          <div id={id} className="invalid-feedback">
            {error}
          </div>
        </div>
      </div>
    );
  }
);

export default UserInfoInput;
