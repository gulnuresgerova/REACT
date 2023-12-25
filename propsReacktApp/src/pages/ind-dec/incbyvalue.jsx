import React, { useState } from "react";

const Incbyvalue = ({ count, setcount }) => {
  const [inputvalue, setinputvalue] = useState(0);
  return (
    <>
      <input
        type="number"
        value={inputvalue}
        onChange={(e) => setinputvalue(e.target.valueAsNumber)}
      />
      <button onClick={() => setcount(count + inputvalue)}>inputvalue</button>
    </>
  );
};

export default Incbyvalue;
