// Formulário para o administrador criar uma nova viagem
import React from "react"
import { useAuth } from "../hook/useAuth";
import { useForm } from "../hook/useForm";
import { BASE_URL } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Rot from "../component/Coordinator"
import {
    Button,
    ButtonGroup,
    Center,
    Box,
    Flex,
    Spacer,
    Heading,
    Input,
    FormLabel,
} from "@chakra-ui/react";

export default function CreateTripPage() {
    useAuth()
    const Navigate = useNavigate()

    const [form, onChange, clear] = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "", })

    const cadastrarViagem = (event) => {
        event.preventDefault()
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.duration
        }
        console.log(body);
        axios.post(`${BASE_URL}trips`, body, { headers: { auth: localStorage.getItem('token') } })
            .then((response) => {
                alert("Viagem cadastrada com sucesso")
                clear();
            })
            .catch((error) => console.log(error))
    }
    return (
        <Center w='100%' h='100%'>
            <Box>
                <Heading color='white'>Create Trips:</Heading>
                <Spacer></Spacer>

                <form onSubmit={cadastrarViagem}>
                    <FormLabel color='white' htmlFor="Name">Name</FormLabel>

                    <Input
                        type="text"
                        name="name"
                        value={form.name}
                        id="name"
                        onChange={onChange}
                        required
                    />
                    <FormLabel color='white'>Destination</FormLabel>
                    <Input
                        name="planet"
                        id="planet"
                        type="text"
                        value={form.planet}
                        onChange={onChange}
                        required

                    />
                    <FormLabel color='white'>Date</FormLabel>
                    <Input
                        name="date"
                        id="date"
                        type="date"
                        value={form.date}
                        onChange={onChange}
                        pattern="^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$"
                        required
                        honda nav

                    />
                    <FormLabel color='white'>Description</FormLabel>
                    <Input
                        name="description"
                        id="description"
                        type="text"
                        value={form.description}
                        onChange={onChange}
                        required
                    />
                    <FormLabel color='white'>Duration</FormLabel>
                    <Input
                        name="duration"
                        id="duration"
                        value={form.duration}
                        onChange={onChange}
                        required
                    />
                    <Button margin='1' colorScheme='blue'>buttonístico</Button>
                    <Button margin='1' colorScheme='blue' onClick={() => Rot.goToAdminHomePage(Navigate)}>go back</Button>

                </form>
            </Box>
        </Center >
    )
}