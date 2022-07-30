import axios from 'axios';
import { React, useState, useEffect } from 'react';
import styled from 'styled-components';

import Cadastrar from "./Components/CreateUser"
import Listar from './Components/GetAllUsers';




function App() {




  const [pagina, setPagina] = useState("Cadastrar")
  const changePage = () => {
    if (pagina === "cadastrar") {
      setPagina("lista")
    }
    else {
      setPagina("cadastrar")

    }

  }

  return (

    <div>
      <button onClick={changePage}>trocar de tela</button>

      {pagina === "cadastrar" ? <Cadastrar /> : <Listar />}

    </div>
  );
}

export default App;
