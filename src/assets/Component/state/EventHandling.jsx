
import { useState } from "react";

export default function EventHandling() {
    const [text, setText] = useState("");
    function handleChange(event) {
        setText(event.target.value);
    }
    return(
        <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
);
}