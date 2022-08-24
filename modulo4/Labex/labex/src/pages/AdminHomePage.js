//Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import * as Rot from '../component/Coordinator'

export default function AdminHomePage() {
    const Navigate = useNavigate()
    const logOut = () => {
        localStorage.clear()
        Rot.goToLoginPage(Navigate)
    }

    return (
        <div>
            <p>AdminHomePage</p>
            <button onClick={() => { Rot.goToCreateTripPage(Navigate) }}>Create Trip</button>
            <button onClick={() => { Rot.goToTripDetailsPage(Navigate) }}>Trip Details List</button>
            <button onClick={() => { logOut() }}>Logout</button>

            <button onClick={() => { Rot.goToHomePage(Navigate) }}>Back to Home</button>

        </div>
    )
}