import ProgressBar from "./ProgressBar.jsx";

const PROGRESS_BARS = [ 0, 25, 50, 75, 100, 2, 0, 100 ];

function App() {
  return (
    <div className="App">
      {
        PROGRESS_BARS.map((perc, idx) => {
          return (
            <ProgressBar key={`${perc}-{idx}`} progressPerc={perc} />
          );
        })
      }
    </div>
  );
}

export default App;
