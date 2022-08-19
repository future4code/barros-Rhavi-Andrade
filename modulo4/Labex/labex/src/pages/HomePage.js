//Para o usuário escolher entre Área Administrativa e Lista de Viagens

import React from "react"
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";






export default function HomePage() {

    const navigate = useNavigate();

    const goToLoginPage = () => {

        navigate("/LoginPage")
    }

    const goToListTripsPage = () => {

        navigate("/ListTripsPage")
    }
    return (
        < div >
            <p>HomePage</p>

            <button onClick={goToListTripsPage}>List Trips</button>

            <button onClick={goToLoginPage}>Admin Area</button>
        </div >
    )
}