import React from "react";
import Cabeca from "./components/Cabeca";
import { Cabecastyle, Corpostyle, PeStyle } from "./style";
import Corpo from "./components/Corpo";
import Pe from "./components/Pe"



function App() {
  return (
    <div className="App">
      <Cabecastyle>
        <Cabeca />
      </Cabecastyle>
      <Corpostyle>
        <Corpo />
      </Corpostyle>
      <PeStyle>
        <Pe />
      </PeStyle>
    </div>
  );
}

export default App;

