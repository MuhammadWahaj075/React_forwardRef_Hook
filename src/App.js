import { useRef } from "react";
import "./App.css";
import User from "./user/User";

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.value = "Hey how about you!!:)";
  };
  return (
    <div className="App">
      <h1
        style={{
          fontFamily: "monospace",
          fontSize: "3.5rem",
          marginTop: "7rem",
          color: "white",
          textTransform: "uppercase"
        }}
      >
        ForwardRef in React
      </h1>
      <User ref={inputRef} />

      <div>
        <button onClick={handleClick} class="glow-on-hover" type="button">
          Update Input Value!
        </button>
      </div>
    </div>
  );
}

export default App;
