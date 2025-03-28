import { useState } from "react";
import TWEETS from "./assets/data.js";
import Tweet from "./components/Tweet/Tweet.jsx";
import "./App.css";

function App() {
  const [ tweets, _ ] = useState(TWEETS);

  return (
    <div className="App">
      {
        tweets.map((user, index) => {
          return (
            <Tweet key={index} {...user} />
          );
        })
      }
    </div>
  );
}

export default App;
