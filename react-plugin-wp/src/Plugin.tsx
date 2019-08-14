import React, { useState, useEffect } from "react";

const Plugin = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <code>Hello Plugin ({seconds})</code>
    </div>
  );
};

export default Plugin;
