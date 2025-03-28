import "./App.css";
import { useState } from "react";

const JOURNEY_TYPES = [ "one-way", "return" ];

function App() {
  const [ typeId, setTypeId ] = useState(0);

  function onChange(e) {
    e.preventDefault();
    setTypeId(prev => prev ^ 1);
  }

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const type = formData.get("type");
    const startDate = formData.get("start-date");
    const endDate = formData.get("end-date");

    const currentDate = Date.now();

    if (startDate === "") {
      alert("Please select a start date!");
      return;
    }

    const startDateValue = new Date(startDate).getTime();
    if (startDateValue < currentDate) {
      alert("Please select a valid start date!");
      return;
    }

    if (endDate === "") {
      alert("Please select an end date!");
      return;
    }

    const endDateValue = new Date(endDate).getTime();
    if (type === "return" && endDateValue < startDateValue) {
      alert("Please select a valid end date!");
      return;
    }

    if (type === "one-way") {
      alert(`You have booked a one-way flight on ${startDate}`);
    } else {
      alert(`You have booked a return flight, departing on ${startDate} and returning on ${endDate}`);
    }
  }

  return (
    <div className="App">
      <form action="/" method="POST" className="flight-booker-form"
            onSubmit={onSubmit}>
        <select id="type" name="type" defaultValue={JOURNEY_TYPES[typeId]}
                onChange={onChange}>
          <option value="one-way">One-way flight</option>
          <option value="return">Return flight</option>
        </select>
        <input type="date" id="start-date" name="start-date"
               defaultValue={""} />
        {
          typeId === 1 && <input type="date" id="end-date" name="end-date" />
        }
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default App;
