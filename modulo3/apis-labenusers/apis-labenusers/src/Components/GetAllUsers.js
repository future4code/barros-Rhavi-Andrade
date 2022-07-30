import axios from "axios";
import { React, useState, UseEffect, useEffect } from "react";


export default function Listar() {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => { listarUsuarios() })

    // const listarUsuarios = (event) => {
    //     axios
    //         .get(url, myHeaders)
    //         .then((response) => {
    //             setUsuarios()

    //         }
    //         )
    // }

    const listarUsuarios = () => {
        axios
            .get(
                url,
                myHeaders
            )
            .then(response => {
                this.setState({ usersList: response.data });
            });
    };













    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    const myHeaders = {
        headers: {
            Authorization: "rhavi-andrade-barros"
        }
    }

    return (
        <div>
            {usuarios.map((usuario) => {
                return <li key={usuario.id}>{usuario.nome}</li>
            }
            )
            }
        </div>
    )
}

