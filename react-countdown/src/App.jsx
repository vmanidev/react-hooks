import React, { useEffect, useState } from "react";

export default function App() {
  const [countdown, setCountdown] = useState(20);
  const [message, setMessage] = useState("useEffect is running...");

  useEffect(() => {
    if (countdown < 0) return;

    const intervalId = setInterval(
      () => setCountdown((prev) => prev - 1),
      1000
    );

    return () => {
      clearInterval(intervalId);
      if (countdown === 0) {
        setMessage((prev) => "useEffect is finished running...");
      }
      console.log("useEffect is finished running...");
    };
  }, [countdown]);

  return (
    <div>
      <div> {countdown < 0 ? "Time is up!" : countdown}</div>
      <div>{message}</div>
      <br />
      <pre style={{ textWrap: "wrap" }}>
        <b>useEffect</b> is a React hook that lets you run side effects <i>(like API calls, timers, or event listeners)</i> in 
        functional components.
      </pre>
    </div>
  );
}
