//Para fazermos login como administrador

import React from "react"
import { useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import { FormLogin } from "../component/FormLogin";
import IsLogged from "../component/IsLogged";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'


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
            {localStorage.token && <IsLogged />}
            {!localStorage.token && <FormLogin />}
            <Center>
                <Button margin='1' colorScheme='blue' onClick={goToHome}> Home</Button>
                <Button margin='1' colorScheme='blue' onClick={goToLastPage}> Voltar</Button>
            </Center>
        </div>
    )
}