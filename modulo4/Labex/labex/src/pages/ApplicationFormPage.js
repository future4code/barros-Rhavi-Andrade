//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição
import { React, useState } from "react"
import { COUNTRY_URL } from "../constants/constants";
import countriesList from "../constants/countries.json"


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

        < div >

            <h1>ApplicationFormPage</h1>

            <form>
                <span>Nome</span>
                <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleInputName}
                    required
                    defaultValue={"nan"}

                />
                <span>Idade</span>
                <input
                    name="age"
                    id="age"
                    type="number"
                    placeholder="Age"
                    value={age}
                    defaultValue={"nan"}
                    onChange={handleInputAge}

                />
                <span>Profissão</span>
                <input
                    name="name"
                    id="name"
                    placeholder="Profissão"
                    value={occupation}
                    defaultValue={"nan"}
                    onChange={handleInputOccupation}

                />
                <span>Application Text</span>
                <input
                    name="name"
                    id="name"
                    placeholder="application"
                    value={application}
                    defaultValue={"nan"}
                    onChange={handleInputApplication}

                />
                <span>Country</span>
                <select
                    name="name"
                    id="name"
                    placeholder="Country"
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
                </select>
                <button>submit</button>
            </form>

            <br></br>

            <button onClick={console.log(body)}>test</button>

        </div >
    )
}