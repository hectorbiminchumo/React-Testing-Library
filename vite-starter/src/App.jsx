import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const className = disabled ? 'gray' : buttonColor;

  return (
    <div>
      <button
        className={className}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
