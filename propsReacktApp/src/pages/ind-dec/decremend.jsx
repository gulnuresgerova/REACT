import React from "react";

const Decremend = ({count, setcount}) => {
  return <button onClick={() => setcount(count + 1)}>Decremend</button>;
};

export default Decremend;
