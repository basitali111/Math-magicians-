/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable */
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div id ="display"className="display">
        0
        </div>
       <button>AC</button>
       <button>+/-</button>
       <button>%</button>
       <button className='orange'>/</button>
       <button>7</button>
       <button>8</button>
       <button>9</button>
       <button className='orange'>*</button>
       <button>4</button>
       <button>5</button>
       <button>6</button>
       <button className='orange'>-</button>
       <button>1</button>
       <button>2</button>
       <button>3</button>
       <button className='orange'>+</button>
       <button className='span2'>0</button>
       <button>.</button>
       <button className='orange'>=</button>
      </div>
    );
  }
}

export default Calculator;
