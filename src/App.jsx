import { useState } from "react";
import Header from "./components/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mx-4">
        <Header />
      </div>
    </>
  );
}

export default App;
