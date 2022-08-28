//Para o usuário escolher entre Área Administrativa e Lista de Viagens
import React from "react"
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { HamburgerIcon, LockIcon } from "@chakra-ui/icons";



export default function HomePage() {

    const navigate = useNavigate();

    const goToLoginPage = () => {

        navigate("/LoginPage")
    }

    const goToListTripsPage = () => {

        navigate("/ListTripsPage")
    }
    return (
        <div>

            <Center height='100%'>
                <Heading as='h2' size='3xl' color='white'>LabeX</Heading>
            </Center>
            <Center>
                <Box>
                    <Image src='https://survivingmars.paradoxwikis.com/images/1/1a/Don%27t_Panic.png' alt='Dont Panic' />
                </Box>
            </Center>
            <Center>
                <Button colorScheme='blue' variant='solid' margin='1' size='lg' onClick={goToListTripsPage}><HamburgerIcon />List Trips</Button>

                <Button colorScheme='blue' variant='solid' margin='1' size='lg' onClick={goToLoginPage}>Admin Area<LockIcon /></Button>
            </Center>
        </div>
    )
}