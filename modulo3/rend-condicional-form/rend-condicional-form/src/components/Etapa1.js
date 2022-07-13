import React from "react";

export default function Etapa1() {
    return (
        <div>
            <p>Você foi pré-selecionado! preencha os campos abaixo!</p>
            <span>Nome:</span>
            <input type="text" requried placeholder="Nome...">
            </input>
            <br />
            <span>Idade:</span>
            <input type="text" requried placeholder="Idade...">
            </input>
            <br />
            <span>Email:</span>
            <input type="text" requried placeholder="SeuEmail@email.com.br">
            </input>
            <br />
            <span>Qual o seu grau de escolaridade</span>
            <select default="">
                <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                <option value="Ensino Médio completo">Ensino Médio completo</option>
                <option value="Ensino superior Incompleto">Ensino superior Incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>

            </select>
        </div>
    )
}



