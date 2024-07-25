import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    window.$wujie?.bus.$on("react-page-bus-event", function (...args) {
      console.log("react-page-bus-event", args);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          <button
            onClick={() =>
              window.$wujie?.bus.$emit("custom-event-form-sub-app", 1, 2, 3)
            }
          >
            click to emit
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
