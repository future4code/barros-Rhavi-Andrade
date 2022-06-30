import React, { useState } from 'react'
import './style.css'

import { IconeComContador } from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'



function Post(props) {
  const [numeroCurtidas, setnumeroCurtidas] = useState(0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentario, setValorInput] = useState('Comentário')

  const handleComentario = (e) => {
    setValorInput(e.target.value)
  }



  const onClickCurtida = () => {
    console.log('Curtiu!')
    setCurtido(!curtido)
    if (curtido === false) { setnumeroCurtidas(numeroCurtidas + 1) }
    else { setnumeroCurtidas(numeroCurtidas - 1) }
  }

  const onClickComentario = () => {
    setComentando(!comentando)
    if (comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} ValorInput={comentario} />
    }
    setValorInput('')
    console.log(comentando)

  }

  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
    console.log(comentario)
  }

  let iconeCurtida

  if (curtido) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }

  let componenteComentario

  if (comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} onChangeComentario={handleComentario} />
  }

  return (
    <div className='PostContainer'>
      <div className='PostHeader'>
        <img className='UserPhoto' src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </div>

      <img className='PostPhoto' src={props.fotoPost} alt={'Imagem do post'} />

      <div className='PostFooter'>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  )


}


export default Post