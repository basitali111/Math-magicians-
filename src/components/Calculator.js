/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable */
import React from "react";
import calculate from "./Logic/calculate";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleclick = (e) => {
    const { innerText } = e.target;
    const result = calculate(this.state, innerText);
    this.setState(result);
  };
  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div id="display" className="display">
          {total || next}
        </div>
        <button type="button" onClick={this.handleclick}>
          AC
        </button>
        <button type="button" onClick={this.handleclick}>
          +/-
        </button>
        <button type="button" onClick={this.handleclick}>
          %
        </button>
        <button type="button" onClick={this.handleclick} className="orange">
          ÷
        </button>
        <button type="button" onClick={this.handleclick}>
          7
        </button>
        <button type="button" onClick={this.handleclick}>
          8
        </button>
        <button type="button" onClick={this.handleclick}>
          9
        </button>
        <button type="button" onClick={this.handleclick} className="orange">
          x
        </button>
        <button type="button" onClick={this.handleclick}>
          4
        </button>
        <button type="button" onClick={this.handleclick}>
          5
        </button>
        <button type="button" onClick={this.handleclick}>
          6
        </button>
        <button type="button" onClick={this.handleclick} className="orange">
          -
        </button>
        <button type="button" onClick={this.handleclick}>
          1
        </button>
        <button type="button" onClick={this.handleclick}>
          2
        </button>
        <button type="button" onClick={this.handleclick}>
          3
        </button>
        <button type="button" onClick={this.handleclick} className="orange">
          +
        </button>
        <button type="button" onClick={this.handleclick} className="span2">
          0
        </button>
        <button type="button" onClick={this.handleclick}>
          .
        </button>
        <button type="button" onClick={this.handleclick} className="orange">
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
