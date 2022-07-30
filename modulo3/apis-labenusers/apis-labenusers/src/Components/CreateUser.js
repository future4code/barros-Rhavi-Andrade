import styled from "styled-components";
import { React, useState, useEffect } from "react";
import axios from "axios";



export default function Cadastrar() {

    const [inputName, setInputName] = useState("")

    const handleInputName = (event) => {
        setInputName(event.target.value)
    };

    const [inputEmail, setInputEmail] = useState("")

    const handleInputEmail = (event) => {
        setInputEmail(event.target.value)
    };

    const body = {
        name: inputName,
        email: inputEmail
    }



    const addUsuario = (event) => {
        event.preventDefault();
        axios
            .post(url, body, myHeaders)
            .then(() => {
                alert("Usuário Cadastrado com sucesso!");
            })
            .catch((erro) => {
                alert("Nuclear Launch Detected!");
                console.log(erro.response);
            });
        setInputName("");
        setInputEmail("");
    };


    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    const myHeaders = {
        headers: {
            Authorization: "rhavi-andrade-barros"
        }
    }

    return (
        <div>

            <br></br>
            <input placeholder="nome..." type="text" value={inputName} onChange={handleInputName}></input>

            <input placeholder="e-mail" type="email" value={inputEmail} onChange={handleInputEmail}></input>


            <button onClick={addUsuario}>Criar usuário</button>
        </div>
    )
}
