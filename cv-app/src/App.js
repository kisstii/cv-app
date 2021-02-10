import "./App.css";
import React, { useState } from "react";
import CopyBoard from "./components/copyboard/CopyBoard";
import Inputtext from "./components/inputtext/InputText";
import ResetButton from "./components/resetbutton/ResetButton";

function App() {
  document.title = "Curriculum Vitae";
  const [text, setText] = useState("");

  return (
    <div className="App">
      <div className="mainContainer">
        <ResetButton onClick={() => setText("")} />
        <Inputtext value={text} onInput={(input) => setText(input.target.value)} />
        <CopyBoard value={text} />
      </div>
    </div>
  );
}

export default App;
