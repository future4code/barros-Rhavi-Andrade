//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import { FormLogin } from "../component/FormLogin";


export default function ApplicationFormPage() {
    return (
        <div>
            <h1>ApplicationFormPage</h1>


            <form>
                <span>Nome</span>
                <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={name}

                    required

                />
                <span>Idade</span>
                <input
                    name="age"
                    id="age"
                    type="number"
                    placeholder="Age"

                />
                <span>Profissão</span>
                <input
                    name="name"
                    id="name"
                    placeholder="Profissão"

                />
                <span>Application Text</span>
                <input
                    name="name"
                    id="name"

                />
                <span>Country</span>
                <input
                    name="name"
                    id="name"

                />
            </form>




        </div>
    )
}