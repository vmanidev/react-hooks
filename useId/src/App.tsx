export default function App() {
  return (
    <>
      <p>
        <strong>useId</strong>: a React hook that generates stable and unique
        dynamic IDs for inputs and other elements, primarily to link labels with
        inputs and improve accessibility.
      </p>
      <form>
        <div>
          <label htmlFor="">Username</label>
          <input id="" name="username" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input id="" name="password" />
        </div>
      </form>
    </>
  );
}
