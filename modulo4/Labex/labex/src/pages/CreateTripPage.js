// Formulário para o administrador criar uma nova viagem
import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import { useAuth } from "../hook/useAuth";
import { useForm } from "../hook/useForm";
import { BASE_URL } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Rot from "../component/Coordinator"

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
        <div>
            <p>CreateTripPage</p>
            <form onSubmit={cadastrarViagem}>
                <label>Name</label>

                <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={onChange}
                    required
                />
                <label>Planet</label>
                <input
                    name="planet"
                    id="planet"
                    type="text"
                    placeholder="Planet"
                    value={form.planet}
                    onChange={onChange}
                    required

                />
                <label>Date</label>
                <input
                    name="date"
                    id="date"
                    type="date"
                    placeholder="Date"
                    value={form.date}
                    onChange={onChange}
                    pattern="^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$"
                    required
                    honda nav

                />
                <label>description</label>
                <input
                    name="description"
                    id="description"
                    type="text"
                    placeholder="Description"
                    value={form.description}
                    onChange={onChange}
                    required
                />
                <input
                    name="duration"
                    id="duration"
                    placeholder="Duration in Days"
                    value={form.duration}
                    onChange={onChange}
                    required
                />
                <button>buttonístico</button>
            </form>
            <button onClick={() => Rot.goToAdminHomePage(Navigate)}>go back</button>
        </div >
    )
}