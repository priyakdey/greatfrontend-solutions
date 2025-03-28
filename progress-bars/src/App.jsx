import { useState } from "react";
import ProgressBar from "./ProgressBar.jsx";

function App() {

  const [ count, setCount ] = useState(0);

  return (
    <div>
      <button onClick={() => {
        setCount((prev) => prev + 1);
      }}>
        Add
      </button>
      {
        new Array(count).fill(0).map((_, idx) => {
          return (<ProgressBar key={idx} />);
        })
      }
    </div>
  );
}

export default App;
