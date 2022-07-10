import { React, useState } from "react";
import { FormularioInputM, FormularioInputR, Formularios, FormulariosBox, Mensagens, Mensagem, Enviar, Nominho, Textinho, Deletar } from "../style"

const Corpo = () => {
    const [inputRemetente, setInputRemetente] = useState("")
    const [inputMensagem, setInputMensagem] = useState("")
    const updateRemetente = (e) => {
        setInputRemetente(e.target.value)
    }
    const updateMensagem = (e) => {
        setInputMensagem(e.target.value)
    }
    const [mensagem, setMensagem] = useState([
        { inputRemetente: "nometeste", inputMensagem: "teste mensagem" },
        { inputRemetente: "testenome", inputMensagem: "teste mensagem 2" }])


    const mensagemMap = mensagem.map((element, index) => {
        return (
            <Mensagem key={index}>
                <Deletar>X</Deletar>
                <Nominho>{element.inputRemetente}</Nominho>
                <Textinho>{element.inputMensagem}</Textinho>

            </Mensagem>
        )
    })



    const addMensagem = (e) => {
        e.preventDefault();
        if (inputRemetente == "Eu") {
            const mensagensAtualizadas = [...mensagem, { inputMensagem }]
            setMensagem(mensagensAtualizadas)

        }
        else {
            const mensagensAtualizadas = [...mensagem, { inputRemetente, inputMensagem }]
            setMensagem(mensagensAtualizadas)

        }

        setInputRemetente("")
        setInputMensagem("")
    }


    return (
        <Formularios>
            <Mensagens>
                <ul>
                    {mensagemMap}
                </ul>
            </Mensagens>
            <FormulariosBox>
                <span>Remetente:</span>
                <FormularioInputR type="text" placeholder="Remetente" required value={inputRemetente} onChange={updateRemetente}>

                </FormularioInputR>
                <span>Msg:</span>
                <FormularioInputM type="text" placeholder="Digite sua mensagem..." required onChange={updateMensagem} value={inputMensagem}>

                </FormularioInputM>
                <Enviar onClick={addMensagem}>Enviar Mensagem</Enviar>
            </FormulariosBox>
        </Formularios>
    )
}
export default Corpo;
