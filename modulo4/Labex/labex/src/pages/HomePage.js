//Para o usuário escolher entre Área Administrativa e Lista de Viagens

import React from "react"
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import * as style from "../component/styled";






export default function HomePage() {

    const navigate = useNavigate();

    const goToLoginPage = () => {

        navigate("/LoginPage")
    }

    const goToListTripsPage = () => {

        navigate("/ListTripsPage")
    }
    return (
        < style.AppBg >
            <style.Logo>Magical Mystery Tour</style.Logo>

            <style.BigButton onClick={goToListTripsPage}>List Trips</style.BigButton>

            <style.BigButton onClick={goToLoginPage}>Admin Area</style.BigButton>
        </style.AppBg >
    )
}