import React, { useState } from "react";
import Decremend from "./decremend";
import Incbyvalue from "./incbyvalue";
import Incrimend from "./incrimend";

const Indec = () => {
  const [count, setcount] = useState(0);
  return (
    <div id="counter">
      <div className="counter">
        <div className="counter">
          <h1>Counter</h1>
          <Incrimend count={count} setcount={setcount} />
          <h2>{count}</h2>
          <Decremend count={count} setcount={setcount} />
          <hr />
          <Incbyvalue count={count} setcount={setcount}/>
        </div>
      </div>
    </div>
  );
};

export default Indec;
