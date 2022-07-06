import React from 'react';
import Post from './components/Post/Post';
import './style.css'


const postElementos = [
  {
    nomeUsuario: "Appinha",
    fotoUsuario: "https://picsum.photos/50/50?random",
    fotoPost: "https://picsum.photos/200/150?random",
  },
  {
    nomeUsuario: "Heleninha",
    fotoUsuario: "https://picsum.photos/50/50?random",
    fotoPost: "https://picsum.photos/200/150?random",
  },
  {
    nomeUsuario: "Débora",
    fotoUsuario: "https://picsum.photos/50/50?random",
    fotoPost: "https://picsum.photos/200/150?random",
  }
]

const listaDeElementos = postElementos.map((dado, index) => {
  return (console.log(<li key={index}>{dado}</li>))
})




function App() {
  return (
    console.log(listaDeElementos()),
    <div className='MainContainer'>
      <Post
        nomeUsuario={'paulinha'}
        fotoUsuario={'https://picsum.photos/50/50?random=3'}
        fotoPost={'https://picsum.photos/200/150?random=3'}
      />
      <Post
        nomeUsuario={'Appa'}
        fotoUsuario={'https://picsum.photos/50/50?random=2'}
        fotoPost={'https://picsum.photos/200/150?random=2'}
      />
      <Post
        nomeUsuario={'Débora'}
        fotoUsuario={'https://picsum.photos/50/50?random=1'}
        fotoPost={'https://picsum.photos/200/150?random=1'}
      />
    </div>

  )

}


export default App;
