import React from 'react'
import './style.css'


export function SecaoComentario(props) {
	return (
		<div className='CommentContainer'>
			<input className='InputComentario'
				placeholder={'Comentário'}
				value={props.onChangeComentario}
				onChange={props.onChangeComentario}
				type='text'
				name='comentario'
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</div>
	)
}