import styled from "styled-components";




export const Logotipo = styled.div`
background-color: white;
height: 100px;
display: flex;
align-items: center;
`

export const Labelogo = styled.img`
height: 100%;
`

export const Logotitle = styled.span`
font-size: 3rem;
font-weight: bolder;

`

export const CabecaStyle = styled.header`
display: flex;
justify-content: center;
;
`
export const CorpoStyle = styled.body`
background-color: darkorange;
display: flex;
justify-content: center;
`


export const Formularios = styled.div`
background-color: white;
display: flex;
flex-direction: column-reverse;
width: 80%;
min-height: calc(100vh - 125px);
height: 100%;
justify-content: end;
`

export const FormulariosBox = styled.form`
background-color: darkorange;
width: 50%;
text-align: center;
display: flex;
align-items: flex-end;
justify-content: space-around;
padding: 0 30% 0 5%;
position: fixed;
bottom: 25px;
`

export const FormularioInputR = styled.input`
width: 10vw;
border-radius: 10px;
`
export const FormularioInputM = styled.input`
width: 20vw;
border-radius: 10px;
`

export const PeStyle = styled.footer`
background-color: gray;
text-align: center;
position: fixed;
bottom: 0;
width: 100%;
height: 25px;
`

export const Mensagens = styled.div`
background-color: white;
display: flex;
justify-content: right;
`

export const Mensagem = styled.div`
background-color: darkgreen;
border-radius: 5px;
margin: 3px 100px;
padding:10px;
max-width: 50%;
word-wrap: break-word;
`
export const Enviar = styled.button`
background-color: darkgreen;
border-radius: 10px;
border-color: green;
font-weight: bold;
`
export const Nominho = styled.p`
font-weight: bold;
font-size: 0.8rem;
font-style: italic;
`
export const Textinho = styled.p`
font-size: 0.9rem;
`
export const Deletar = styled.div`
z-index: 100;
position: fixed;
display: flex;
justify-content: top;
background-color: blue;

`