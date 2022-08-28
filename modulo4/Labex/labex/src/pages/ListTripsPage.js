import React from "react"
import useRequestData from "../hook/useRequestData";
import { BASE_URL } from "../constants/constants"
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Spacer } from '@chakra-ui/react'

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

            return <Center backgroundColor='navy' margin='1' borderRadius={5} color='white'>{trip.name}<Spacer />< Button size='sm' colorScheme='blue'> apply</Button></Center>
        })
    return (
        <div>
            <Center>
                <Heading as='h2' size='3xl' color='white'>List of Trips</Heading>
            </Center>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p> fffuuuuuuuuuuuu</p>}
            {!isLoading && data.trips && data.trips.length > 0 && (tripsList)}
            {isLoading && data.trips && data.trips.length === 0 && <p> não há viagens </p>}

            <br></br>
            <Center>
                <Button margin='1' colorScheme='blue' onClick={goToApplicationFormPage}>inscrever na Viagem</Button>
                <Button margin='1' colorScheme='blue' onClick={goToHomePage}>voltar para Home page </Button >
            </Center>
        </div>
    )
}