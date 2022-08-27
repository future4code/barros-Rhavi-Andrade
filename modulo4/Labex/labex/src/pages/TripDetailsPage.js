// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela

import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import { useAuth } from "../hook/useAuth";
import { BASE_URL } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hook/useRequestData";
import TripDetailCard from "../component/TripDetailCard";

export default function TripDetailsPage() {
    useAuth()
    const navigate = useNavigate();
    const goToApplicationFormPage = () => {
        navigate("/ApplicationFormPage")
    }
    const goToHomePage = () => {
        navigate("/HomePage")
    }




    const [data, isLoading, error] = useRequestData(`${BASE_URL}trips`)

    const selectTrip = (id) => {
        localStorage.removeItem("tripId");
        localStorage.setItem("tripid", id)
    }

    const tripsList =
        data.trips && data.trips.map((trip) => {

            return <div>{trip.name}
                < button onClick={() => selectTrip(trip.id)}>Details</button>
            </div>

        })

    const triipDetalhes = dado2.trip && dado2.trip.map((td) => {
        return <div>
            {td.name}
            {td.date}

        </div>
    })
    return (
        <div>
            <p>Trip Details Page</p>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p> fffuuuuuuuuuuuu</p>}
            {!isLoading && data.trips && data.trips.length > 0 && (tripsList)}
            {isLoading && data.trips && data.trips.length === 0 && <p> não há viagens </p>}

            <br></br>
            <button onClick={goToApplicationFormPage}>inscrever na Viagem</button>
            <button onClick={goToHomePage}>voltar para Home page </button >
        </div>
    )
}