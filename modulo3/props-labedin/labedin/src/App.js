import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import emailIcon from './components/CardPequeno/emailicon.jpeg';
import enderecoIcon from './components/CardPequeno/enderecoicon.jpeg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://i.imgur.com/ocO0iLn.jpeg"
          nome="Rhavi Marques"
          descricao="Oi, eu sou o Rhavi, sou estudante de full-stack web dev na Labenu, tenho um cachorro chamado Appa e ele é muito legal."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png"
          texto="Ver mais"
        />
        <CardPequeno
          imagem={emailIcon}
          nome="Email"
          descricao="meuemail@gmail.com"
        />
        <CardPequeno
          imagem={enderecoIcon}
          nome="Endereço"
          descricao="rua sete"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/6241ac1fd706d9d674bcc7c5_tec-6-1.svg"
          nome="Labenu"
          descricao="Estudando full-stack web dev para poder comprar mais brinquedos para o Appa!"
        />

        <CardGrande
          imagem="https://d2taiddx6mfokk.cloudfront.net/storeimages/dff06cbe-f27e-4744-b4e2-980a612264a5/00cef2d8-6e94-4378-ba9d-244a0563985c"
          nome="WAZ"
          descricao="trabalhando no e-commerce de uma loja de computadores em Belo Horizonte"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
