import { useState } from "react";

export default function toggle() {
const [isOn, setIsOn] = useState(false);

function toggleButton() {
  setIsOn(!isOn);
}
  return (
 
    <div>
      <h1>{isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggleButton}>Toggle</button>
    </div>
  );
}
