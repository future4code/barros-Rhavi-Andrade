import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

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
            <Heading as='h5' size='md' color='white'> você está logado como {localStorage.userName}</Heading>
            <Center>
                <Button margin='1' colorScheme='blue' onClick={goToAdminHomePage}>Continuar</Button>
                <Button margin='1' colorScheme='blue' onClick={logOut}>Log Out</Button>
            </Center>


        </div>
    )
}