import { useState } from "react";

function Conditional() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Conditional Rendering Example</h1>

      {/* Method 1 — if/else using variable */}
      {isLoggedIn ? <p>Welcome back 👋</p> : <p>Please log in</p>}

      {/* Method 2 — && operator */}
      {isLoggedIn && <p>You have new notifications</p>}

      {/* Method 3 — button toggle */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Conditional;
