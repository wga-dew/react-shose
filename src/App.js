import React  from "react";
import {Products} from "./templates";
import {Header} from "./components";

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Products />
      </div>
    </>
  );
}

export default App;
