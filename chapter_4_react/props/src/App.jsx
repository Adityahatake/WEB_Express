// App.jsx
import Props from "./Props";
import Conditional from "./Conditional";
import RenderList from "./RenderList";

function App() {
  return (
    <>
      <h1>React Props Demo</h1>

      <Props name="Aadiee" age={20} isStudent={true} />
      <Props name="Alex" age={22} isStudent={false} />
      <Props name="Sam" age={16} isStudent={true} />
       <Conditional />
        
        <RenderList/>
    </>
  );
}

export default App;
