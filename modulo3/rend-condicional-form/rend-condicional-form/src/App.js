import { React, useState } from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Etapa4 from "./components/Etapa4";



function renderizaEtapa() {

  switch (etapa) {
    case 1:
      Etapa1()
      break;
    case 2:
      Etapa2()
      break;
    case 3:
      Etapa3()
      break;
    case 4:
      Etapa4()
      break;
  }


}


function App() {
  state = {
    etapa: 1,
  }

  return (

    <div>
      {renderizaEtapa()}
      <button onClick={avancaPagina}>Próxima Etapa</button>
    </div>
  )
}

export default App;