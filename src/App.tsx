import React, { useState } from 'react';
import styled from "styled-components";

function App() {

  const [display, setDisplay] = useState<string>("")
  let equation: string = ""

  const gridItems: Array<string> = ["MU", "MRC", "M+", "M-", "/", "%", "7", "8", "9", "*", "√", "4", "5", "6", "-", "C/CE", "1", "2", "3", "+", "ON", "0", ".", "="]

  const handleClick = (prop: string) => {
    // Adds the numbers to the array
    equation += prop
    console.log(equation)
    checkOperation(prop);
    console.log(Number(prop))
  }

  // TODO Need logic to check what operation was clicked
  const checkOperation = (ope: string) => {
    switch (ope) {
      case "+":
        equation.split("+")
        break;
      case "/":
        equation.split(ope)
        break;
      case "-":
        equation.split(ope)
        break;
      
      case "√":
        equation.split(ope)
        break;
      
      case "%":
        equation.split(ope)
        break;
      case "*":
        equation.split(ope)
        break;
      
      case "=":

        break;
      default:
        break;
    }
  }

  return (
    <div className="calculator">
      {/* This has the display of the answer and calculation */}
      <div className="display">
        <p className='answer'>{display}</p>
      </div>
      {/* Shows the numbers and the operations */}
      <div className="grid">
        {gridItems.map((item, i) => {
          let num = "button" + i.toString()
          return <Button key={i} className={num} onClick={() => handleClick(item)}>{item}</Button>
        })}
      </div>
    </div>
  );
}

export default App;

// Styled Components
const Button = styled.button`
  border-radius: 0.5rem;
  border: 1px solid black;
  background: transparent;
  &:hover {
    background: red;
  }
`