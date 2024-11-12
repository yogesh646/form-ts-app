import React, { useEffect, useRef, useState } from "react";

const Useh = () => {
  const [timer, settimer] = useState(0);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current = setInterval(() => {
      settimer(timer + 1);
    }, 500);
  });
  return (
    <div>
      useHook
      <br />
      Timer:{timer}
    </div>
  );
};

export default Useh;
