import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'


export function FormLogin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();



    const mudaEmail = (event) => {
        setEmail(event.target.value)
    }
    const mudaSenha = (event) => {
        setSenha(event.target.value)
    }
    const fazerLogin = (event) => {
        event.preventDefault()
        axios.post(url, body, headers)
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("userName", email)
                console.log(response.data);
                navigate("/AdminHomePage")
            }).catch((error) => {
                alert("Usuário não cadastrado ou senha inválida")
                console.log(error);
            })

    }


    const body = {
        "email": email,
        "password": senha
    }
    const headers =
        'Content-Type: application/json'
    const url = `${BASE_URL}login`

    return (
        <div>
            <Center>
                <Box border='solid' margin='5' padding='5'>
                    <form onSubmit={fazerLogin}>
                        <FormControl isRequired>

                            <FormLabel color='white'>Email address</FormLabel>
                            <input
                                type="email"

                                value={email}
                                onChange={mudaEmail}
                                required
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel isRequired color='white'>Password</FormLabel>
                            <input

                                required
                                type='password'
                                value={senha}
                                onChange={mudaSenha}
                                pattern="^.{3,}"
                            />
                            <br></br>
                            <Center>
                                <Button
                                    mt={4}
                                    colorScheme='blue'
                                    type='submit'
                                >Login</Button>
                            </Center>
                        </FormControl>
                    </form>
                </Box>
            </Center>
        </div >
    )

}