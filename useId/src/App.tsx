import { useId } from "react";

export default function App() {
  const dynamicId = useId();

  return (
    <>
      <p id={`${dynamicId}_paragraph`}>
        <strong>useId</strong>: a React hook that generates stable and unique
        dynamic IDs for inputs and other elements, primarily to link labels with
        inputs and improve accessibility.
      </p>
      <form id={`${dynamicId}_form`}>
        <div>
          <label htmlFor={`${dynamicId}_username`}>Username</label>
          <input id={`${dynamicId}_username`} name="username" />
        </div>
        <div>
          <label htmlFor={`${dynamicId}_password`}>Password</label>
          <input id={`${dynamicId}_password`} name="password" />
        </div>
      </form>
    </>
  );
}
