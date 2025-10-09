### `useImperativeHandle` + `forwardRef`

**Exposing Imperative Methods from Child Components**

`useImperativeHandle` is a React hook used in combination with `forwardRef` to **customize the instance value that a parent can access via a ref**. It allows a parent component to imperatively call methods or read values from a child component, such as focusing an input, clearing a field, or accessing internal state, while keeping the child’s internal implementation encapsulated.

* Useful for **accessing DOM nodes** or exposing **custom API methods**.

**Example Use Cases:**

* Focusing an input programmatically (`inputRef.current.focusInput()`)
* Clearing form fields (`inputRef.current.clearInput()`)
* Exposing getter/setter methods (`inputRef.current.getValue()`, `inputRef.current.setValue(value)`)

**Docs:**

* React Docs: [useImperativeHandle](https://react.dev/reference/react/useImperativeHandle)
* React Docs: [forwardRef](https://react.dev/reference/react/forwardRef)

---

**⚠️ `forwardRef` is deprecated in React 19—pass `ref` as a prop instead.**

```jsx
function MyComp(props, ref) { ... }
Called as <MyComp ref={ref} />
```
