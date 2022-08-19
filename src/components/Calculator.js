/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable */
import React,{useState} from "react";
import calculate from "./Logic/calculate";

const Calculator=()=>  {
  const [state, calc] = useState(0);
  const { total, next, operation } = state;

 const handleclick = (e) => {
    const { innerText } = e.target;
   calc(calculate(state, innerText));
  };
    return (
      <div className="calculator">
        <div id="display" className="display">
          {total || next}
        </div>
        <button type="button" onClick={handleclick}>
          AC
        </button>
        <button type="button" onClick={handleclick}>
          +/-
        </button>
        <button type="button" onClick={handleclick}>
          %
        </button>
        <button type="button" onClick={handleclick} className="orange">
          ÷
        </button>
        <button type="button" onClick={handleclick}>
          7
        </button>
        <button type="button" onClick={handleclick}>
          8
        </button>
        <button type="button" onClick={handleclick}>
          9
        </button>
        <button type="button" onClick={handleclick} className="orange">
          x
        </button>
        <button type="button" onClick={handleclick}>
          4
        </button>
        <button type="button" onClick={handleclick}>
          5
        </button>
        <button type="button" onClick={handleclick}>
          6
        </button>
        <button type="button" onClick={handleclick} className="orange">
          -
        </button>
        <button type="button" onClick={handleclick}>
          1
        </button>
        <button type="button" onClick={handleclick}>
          2
        </button>
        <button type="button" onClick={handleclick}>
          3
        </button>
        <button type="button" onClick={handleclick} className="orange">
          +
        </button>
        <button type="button" onClick={handleclick} className="span2">
          0
        </button>
        <button type="button" onClick={handleclick}>
          .
        </button>
        <button type="button" onClick={handleclick} className="orange">
          =
        </button>
      </div>
    );
  }


export default Calculator;
