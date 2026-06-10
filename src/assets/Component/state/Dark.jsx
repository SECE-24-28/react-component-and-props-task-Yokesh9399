import { useState } from "react";
export default function Dark() {
  const [isDark, setIsDark] = useState(false);
  function themeChange() {
    setIsDark(!isDark);
  }
  return (  
    <div style={{ backgroundColor: isDark ? "black" : "white", height: "100vh" , textAlign: "center"    }}>
        <h1 style={{ color: isDark ? "white" : "black" }}>
          {isDark ? "Dark Mode" : "Light Mode"}
        </h1>
        <button onClick={themeChange} style={{ backgroundColor: isDark ? "white" : "black", color: isDark ? "black" : "white" }}>
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
    </div>
  );
}