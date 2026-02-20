import React, { useState } from "react";

function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  return (

    <div style={{ padding: "20px" }}>

      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={() => setResult(Number(num1) + Number(num2))}>
        Add
      </button>

      <button onClick={() => setResult(Number(num1) - Number(num2))}>
        Subtract
      </button>

      <button onClick={() => setResult(Number(num1) * Number(num2))}>
        Multiply
      </button>

      <button onClick={() => setResult(Number(num1) / Number(num2))}>
        Divide
      </button>

      <br /><br />

      <div>
        Result: {result}
      </div>

    </div>
  );
}

export default App;
