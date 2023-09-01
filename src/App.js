import React, { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import './App.css';

function App() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState("");
  const buttons = ["7", "8", "9", "C", "4", "5", "6", "*", "1", "2", "3", "/", "+", "0", "-", "=", "sqrt", "^", "(", ")", "ANS"];

  const handleClick = (string) => {
    if (string === "=") {
      try {
        const res = evaluate(equation);
        setResult(res.toString());
        setEquation(""); 
      } catch (error) {
        setResult("Error");
      }
      } else if (string === "C") {
        setEquation("");
        setResult("");
      } else if (string === "sqrt") {
        setEquation(equation + "sqrt(");
      } else if (string === "^") {
        setEquation(equation + "^");
      } else if (string === "(") {
        setEquation(equation + "(");
      } else if (string === ")") {
        setEquation(equation + ")");
      } else if (string === "ANS") {
        setEquation(equation + result); 
      }else {
        setEquation(equation + string);
      }
    };

  

  return (
    <div className="app">
      <div className="calculator">
        <h1>{result}</h1>
        <div className="equation">{equation}</div>
        <div className="buttonWrap">
          {buttons.map((button, index) => (
            <button className={`button-${button}`} onClick={() => handleClick(button)} key={index}>
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;