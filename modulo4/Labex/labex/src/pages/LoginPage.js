//Para fazermos login como administrador

import React from "react"
import { useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";





export default function LoginPage() {
    const navigate = useNavigate();



    const goToLastPage = () => {
        navigate(-1)
    }
    const goToHome = () => {
        navigate("/")
    }
    return (
        <div>
            <p>LoginPage</p>

            <button onClick={goToHome}> Home</button>
            <button onClick={goToLastPage}> Voltar</button>

        </div>
    )
}