import logo from './Rhavi_Appa.jpg';
import './App.css';

function mensagem() {
  alert("O botão foi clicado :)")
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Olá! Eu sou <strike>o bat</strike> o Rhavi! </h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Este é o meu primeiro site React
        </p>
        <button onClick={mensagem}>Clique aqui</button>
      </header>
    </div>
  );
}

export default App;
