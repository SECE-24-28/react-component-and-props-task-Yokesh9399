import { useState } from 'react'
export default function TextPass() {
    const [showPassword, setShowPassword] = useState(false);

    function togglePassword() {
        setShowPassword(!showPassword);
    }

  return (
    <div>
      <input type={showPassword ? "text" : "password"} />
      <button onClick={togglePassword}>
        {showPassword ? "Hide" : "Show"} Password
      </button>
    </div>
  );
}
