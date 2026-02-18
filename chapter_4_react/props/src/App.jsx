// App.jsx
import Props from "./Props";

function App() {
  return (
    <>
      <h1>React Props Demo</h1>

      <Props name="Aadiee" age={20} isStudent={true} />
      <Props name="Alex" age={22} isStudent={false} />
      <Props name="Sam" age={16} isStudent={true} />
    </>
  );
}

export default App;
