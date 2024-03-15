import React from "react";

import {
  add,
  divideFirstNumberBySecondNumber as divide,
  multiply,
} from "../../src/uties/calculate";
import Watch from "../Watch/Watch";
import "./sunglass.css";
const Sunglass = () => {
  const first = 55;
  const second = 23;
  const sum = add(first, second);
  const mult = multiply(first, second);
  const vaag = divide(first, second);

  return (
    <div>
      <Watch></Watch>
    </div>
  );
};

export default Sunglass;
