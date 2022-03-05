import react from "react";
import Hello from "./Hello";

/*컴포넌트는 일종의 UI조각. 쉽게 재사용 가능*/
function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

export default App;
