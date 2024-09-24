import React, { Suspense, lazy, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const LazyCom = lazy(() => import("./com/LazyCom"));

function App() {
  useEffect(() => {
    window.$wujie?.bus.$on("react-page-bus-event", function (...args) {
      console.log("react-page-bus-event", args);
    });
    // bug
    // console.log(document.location.href, window.location.href);
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
        <Suspense fallback={null}>
          <LazyCom />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
