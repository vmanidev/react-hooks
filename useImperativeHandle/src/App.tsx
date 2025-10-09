import { forwardRef, useImperativeHandle, useRef } from "react";

export interface CustomInputRef {
  focusInput: () => void;
  clearInput: () => void;
}

const ChildElement = forwardRef<
  CustomInputRef,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => inputRef?.current?.focus(),
    clearInput: () => {
      if (inputRef.current) inputRef.current.value = "";
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      name="input-text"
      placeholder="type something..."
      {...props}
    />
  );
});

export default function App() {
  const parentRef = useRef<CustomInputRef>(null);

  return (
    <div>
      <ChildElement ref={parentRef} />
      <button onClick={() => parentRef.current?.focusInput()}>Focus</button>
      <button onClick={() => parentRef.current?.clearInput()}>Clear</button>
    </div>
  );
}
