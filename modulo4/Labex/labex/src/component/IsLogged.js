import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"


export default function IsLogged() {
    const navigate = useNavigate()
    const goToAdminHomePage = () => {

        navigate("/AdminHomePage")
    }

    const logOut = () => {
        localStorage.clear()
        document.location.reload()
    }


    return (
        <div>
            <h3> você está logado como {localStorage.userName}</h3>

            <button onClick={goToAdminHomePage}>Continuar</button>
            <button onClick={logOut}>Log Out</button>



        </div>
    )
}