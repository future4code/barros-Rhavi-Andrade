import React from "react"
import useRequestData from "../hook/useRequestData";
import { BASE_URL } from "../constants/constants"
import { useNavigate } from "react-router-dom";


export default function ListTripsPage() {
    const navigate = useNavigate();
    const goToApplicationFormPage = () => {
        navigate("/ApplicationFormPage")
    }
    const goToHomePage = () => {
        navigate("/HomePage")
    }




    const [data, isLoading, error] = useRequestData(`${BASE_URL}trips`)




    const tripsList =
        data.trips && data.trips.map((trip) => {

            return <li>{trip.name}< button> apply</button></li >
        })
    return (
        <div>
            <p>ListTripsPage</p>
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