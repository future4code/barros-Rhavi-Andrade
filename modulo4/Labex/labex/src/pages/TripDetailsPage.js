// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela
import React from "react"
import { useAuth } from "../hook/useAuth";
import { BASE_URL } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hook/useRequestData";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Spacer } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'

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

            return <Center backgroundColor='navy' margin='1' borderRadius={5} color='white'>{trip.name}<Spacer />
                < Button colorScheme='blue' onClick={() => selectTrip(trip.id)}>Details</Button>
            </Center>

        })
    return (
        <div>
            <Heading color='white'>Trips List:</Heading>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p> fffuuuuuuuuuuuu</p>}
            {!isLoading && data.trips && data.trips.length > 0 && (tripsList)}
            {isLoading && data.trips && data.trips.length === 0 && <p> não há viagens </p>}

            <br></br>

            <Box>
                <Heading color='white'>Details here:</Heading>
                <Center bg='beige' p='20px' borderRadius='5px'>
                    <Spinner color='#4f2600' />
                </Center>
            </Box>

            <Center border='solid'>
                <Button margin='1' colorScheme='blue' onClick={goToApplicationFormPage}>inscrever na Viagem</Button>
                <Button margin='1' colorScheme='blue' onClick={goToHomePage}>Home page </Button >
            </Center>
        </div>
    )
}