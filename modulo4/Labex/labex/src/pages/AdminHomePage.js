//Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas
import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import * as Rot from '../component/Coordinator'
import { useAuth } from '../hook/useAuth';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'






export default function AdminHomePage() {
    useAuth()
    const Navigate = useNavigate()
    const logOut = () => {
        localStorage.clear()
        Rot.goToLoginPage(Navigate)
    }

    return (
        <div>
            <Center>
                <Box margin='2' border='solid'>
                    <Heading color='white'>Welcome</Heading><br></br>
                    <Button margin='2' colorScheme='blue' onClick={() => { Rot.goToCreateTripPage(Navigate) }}>Create Trip</Button>
                    <Button margin='2' colorScheme='blue' onClick={() => { Rot.goToTripDetailsPage(Navigate) }}>Trip Details List</Button>
                </Box>
            </Center>
            <Center margin='2'>
                <Button margin='2' colorScheme='blue' onClick={() => { logOut() }}>Logout</Button>

                <Button margin='2' colorScheme='blue' onClick={() => { Rot.goToHomePage(Navigate) }}>Back to Home</Button>
            </Center>
        </div>
    )
}