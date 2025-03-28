import { useState } from "react";

import Table from "./Table.jsx";
import "./App.css";

function App() {
  const [ table, setTable ] = useState([]);

  function generateTable(rows, cols) {
    const table = Array.from({ length: rows }, () => new Array(cols));

    let goingDown = true;
    let num = 1;
    for (let col = 0; col < cols; col++) {
      if (goingDown) {
        for (let row = 0; row < rows; row++) {
          table[row][col] = num++;
        }
      } else {
        for (let row = rows - 1; row >= 0; row--) {
          table[row][col] = num++;
        }
      }
      goingDown = !goingDown;
    }

    return table;
  }


  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const rows = parseInt(formData.get("rows"));
    const cols = parseInt(formData.get("cols"));

    setTable(generateTable(rows, cols));
  }

  return (
    <div className="App">
      <form action="/" method="POST" onSubmit={onSubmit} className="App-form">
        <div className="App-form-input">
          <label id="rows">Rows</label>
          <input id="rows" name="rows" type="number" min="1" />
        </div>
        <div className="App-form-input">
          <label id="rows">Columns</label>
          <input id="cols" name="cols" type="number" min="1" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Table table={table} />
    </div>
  );
}

export default App;
