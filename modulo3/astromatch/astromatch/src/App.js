import React, { useState } from "react";
import Matchcard from "./components/matchcard";
import axios from "axios";




// axios 
const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"




function App() {

  const [perfil, setPerfil] = React.useState({})

  const getPerfil = () => {
    axios
      .get(url)
      .then((response) => {

        const perfilInfo = response.data.profile;
        console.log(perfilInfo)
      }

      )
      .catch(error => { console.log(error) });


  }



  return (
    <div className="App">

      <button>go to matches</button>
      <br></br>

      <button onClick={getPerfil}>clear</button>

      <Matchcard name={perfilInfo} />
    </div>
  );
}

export default App;
