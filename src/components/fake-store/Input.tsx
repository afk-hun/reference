import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input className="form-control" id={id} ref={ref} {...props}></input>
    </>
  );
});

export default Input;
