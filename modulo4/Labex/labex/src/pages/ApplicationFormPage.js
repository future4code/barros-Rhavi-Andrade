//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import { React, useState } from "react"
import {
    Button,
    ButtonGroup,
    Center,
    Box,
    Flex,
    Spacer,
    Select,
    Heading,
    Input,
    FormLabel,
} from "@chakra-ui/react";


export default function ApplicationFormPage() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [application, setApplication] = useState("");
    const [occupation, setOccupation] = useState("");
    const [country, setCountry] = useState("");

    //let name
    //  let age
    //let application
    // let occupation
    //let country



    const handleInputName = (e) => {
        setName(e.target.value);
    };
    const handleInputAge = (e) => {
        setAge(e.target.value);
    };
    const handleInputApplication = (e) => {
        setApplication(e.target.value);
    };
    const handleInputOccupation = (e) => {
        setOccupation(e.target.value);
    };
    const handleSelectCountry = (e) => {
        setCountry(e.target.value);
    }



    const body = { name, age, application, occupation, country }


    return (

        < Center >

            <Heading color='white'>ApplicationFormPage
                Não consigo colocar esse texto no topo :D</Heading>
            <Box h='1000px' width='300px' borderColor='white' borderStyle='solid'>
                <form>
                    <FormLabel color='white'>Nome</FormLabel>
                    <Input
                        name="name"
                        id="name"
                        type="text"

                        value={name}
                        onChange={handleInputName}
                        required
                        defaultValue={"nan"}

                    />
                    <FormLabel color='white'>Idade</FormLabel>
                    <Input

                        id="age"
                        type="number"

                        value={age}
                        defaultValue={"nan"}
                        onChange={handleInputAge}

                    />
                    <FormLabel color='white'>Profissão</FormLabel>
                    <Input

                        id="name"

                        value={occupation}
                        defaultValue={"nan"}
                        onChange={handleInputOccupation}

                    />
                    <FormLabel color='white'>Application Text</FormLabel>
                    <Input
                        name="name"
                        id="name"

                        value={application}
                        defaultValue={"nan"}
                        onChange={handleInputApplication}

                    />
                    <FormLabel color='white'>Country</FormLabel>
                    <Select

                        id="name"
                        color='white'
                        value={country}
                        defaultValue={"nan"}
                        onChange={handleSelectCountry}
                        required
                    >
                        <option>Brazil</option>
                        <option>United States</option>
                        <option>USSR</option>


                        {/* {countriesList.nome && countriesList.nome.map((option, index) => (
                        console.log("olá"),
                        < option key={index} value={option.nome.abreviado} >
                            {option.nome.abreviado}


                        </option>
                    ))} */}
                    </Select>
                    <Button colorScheme='blue'>submit</Button>

                </form>

            </Box>





        </Center >
    )
}