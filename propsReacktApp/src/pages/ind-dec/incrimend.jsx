import React from "react";

const Incrimend = ({count, setcount}) => {
  return <button onClick={() => setcount(count - 1)}>incrimend</button>;
};

export default Incrimend;
