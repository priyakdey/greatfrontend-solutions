import { useState } from "react";
import Input from "./Input.jsx";

function App() {
  const [ celsius, setCelsius ] = useState("");
  const [ fahrenheit, setFahrenheit ] = useState("");

  const formatValue = (value) => {
    return parseFloat(parseFloat(value).toFixed(4)).toString();
  };

  const onCelsiusChange = (e) => {
    e.preventDefault();
    const cValue = e.target.value;
    const fValue = (cValue * 9 / 5) + 32;
    setCelsius(formatValue(cValue));
    setFahrenheit(formatValue(fValue));
  };

  const onFahrenheitChange = (e) => {
    e.preventDefault();
    const fValue = e.target.value;
    const cValue = (fValue - 32) * 5 / 9;
    setCelsius(formatValue(cValue));
    setFahrenheit(formatValue(fValue));
  };

  return (
    <div className="App">
      <Input
        name="Celsius"
        temp={celsius}
        onChange={onCelsiusChange}
      />
      {"="}
      <Input
        name="Fahrenheit"
        temp={fahrenheit}
        onChange={onFahrenheitChange}
      />
    </div>
  );
}

export default App;
